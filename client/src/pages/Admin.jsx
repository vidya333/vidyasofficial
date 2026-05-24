import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Upload, X, Loader, Plus, Pencil, Trash2, LogOut } from "lucide-react";

const BASE = import.meta.env.VITE_API_URL || "";
const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const TYPES = ["experience", "project", "certification", "achievement", "blog", "event", "other"];

const EMPTY_FORM = {
  type: "project", title: "", description: "",
  date: "", link: "", tags: "", image: "", featured: false,
};

// ── Image Upload Component ─────────────────────────────────────────────────
function ImageUploader({ value, onChange }) {
  const inputRef = useRef(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(value || "");
  const [error, setError] = useState("");

  const handleFile = async (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) { setError("Only image files allowed"); return; }
    if (file.size > 5 * 1024 * 1024) { setError("Max file size is 5MB"); return; }

    setError("");
    setUploading(true);

    // Show local preview immediately
    const localUrl = URL.createObjectURL(file);
    setPreview(localUrl);

    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", UPLOAD_PRESET);

      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        { method: "POST", body: formData }
      );
      const data = await res.json();

      if (data.secure_url) {
        setPreview(data.secure_url);
        onChange(data.secure_url);
      } else {
        setError("Upload failed — check Cloudinary config");
        setPreview("");
        onChange("");
      }
    } catch {
      setError("Upload failed");
      setPreview("");
      onChange("");
    } finally {
      setUploading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const clear = () => {
    setPreview("");
    onChange("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>
        Image
      </label>

      {preview ? (
        <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: "var(--border2)" }}>
          <img src={preview} alt="preview" className="w-full h-40 object-cover" />
          {uploading && (
            <div className="absolute inset-0 flex items-center justify-center"
              style={{ background: "rgba(0,0,0,0.5)" }}>
              <Loader size={24} className="animate-spin text-white" />
            </div>
          )}
          {!uploading && (
            <button
              type="button"
              onClick={clear}
              className="absolute top-2 right-2 w-7 h-7 rounded-full flex items-center justify-center
                text-white cursor-pointer border border-white/20"
              style={{ background: "rgba(0,0,0,0.6)" }}
            >
              <X size={13} strokeWidth={2.5} />
            </button>
          )}
        </div>
      ) : (
        <div
          className="border-2 border-dashed rounded-xl p-6 text-center cursor-pointer
            transition-colors duration-200 hover:border-[var(--purple)]"
          style={{ borderColor: "var(--border2)", background: "var(--bg3)" }}
          onClick={() => inputRef.current?.click()}
          onDrop={handleDrop}
          onDragOver={e => e.preventDefault()}
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <Loader size={24} className="animate-spin" style={{ color: "var(--purple)" }} />
              <p className="text-sm" style={{ color: "var(--text2)" }}>Uploading...</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <Upload size={22} strokeWidth={1.8} style={{ color: "var(--purple)" }} />
              <p className="text-sm font-medium" style={{ color: "var(--text)" }}>
                Click to upload or drag & drop
              </p>
              <p className="text-xs" style={{ color: "var(--text3)" }}>
                PNG, JPG, WEBP up to 5MB
              </p>
            </div>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={e => handleFile(e.target.files[0])}
      />

      {/* Also allow URL fallback */}
      <input
        type="text"
        placeholder="Or paste image URL directly"
        value={preview.startsWith("blob:") ? "" : preview}
        onChange={e => { setPreview(e.target.value); onChange(e.target.value); }}
        className="px-3 py-2 rounded-lg border text-sm outline-none"
        style={{
          background: "var(--bg3)", borderColor: "var(--border2)",
          color: "var(--text)", fontFamily: "var(--font-body)",
        }}
      />

      {error && <p className="text-xs" style={{ color: "var(--pink)" }}>{error}</p>}
    </div>
  );
}

// ── Main Admin ─────────────────────────────────────────────────────────────
export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [password, setPassword] = useState("");
  const [items, setItems] = useState([]);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editing, setEditing] = useState(null);
  const [msg, setMsg] = useState("");
  const [msgType, setMsgType] = useState("success");

  const isAuth = !!token;
  const headers = { Authorization: `Bearer ${token}` };

  const notify = (text, type = "success") => {
    setMsg(text); setMsgType(type);
    setTimeout(() => setMsg(""), 3000);
  };

  const login = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${BASE}/api/auth/login`, { password });
      localStorage.setItem("admin_token", data.token);
      setToken(data.token);
    } catch { notify("Invalid password", "error"); }
  };

  const logout = () => { localStorage.removeItem("admin_token"); setToken(""); };

  const fetchItems = async () => {
    const { data } = await axios.get(`${BASE}/api/timeline`);
    setItems(data);
  };

  useEffect(() => { if (isAuth) fetchItems(); }, [isAuth]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...form, tags: form.tags.split(",").map(t => t.trim()).filter(Boolean) };
    try {
      if (editing) {
        await axios.put(`${BASE}/api/timeline/${editing}`, payload, { headers });
        notify("Updated successfully!");
      } else {
        await axios.post(`${BASE}/api/timeline`, payload, { headers });
        notify("Added successfully!");
      }
      setForm(EMPTY_FORM);
      setEditing(null);
      fetchItems();
    } catch { notify("Error saving item", "error"); }
  };

  const handleEdit = (item) => {
    setEditing(item._id);
    setForm({ ...item, tags: item.tags?.join(", ") || "", date: item.date?.slice(0, 10) || "" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this item?")) return;
    await axios.delete(`${BASE}/api/timeline/${id}`, { headers });
    fetchItems();
    notify("Deleted");
  };

  // ── Login screen ──
  if (!isAuth) return (
    <div className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-sm rounded-2xl border p-8"
        style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-extrabold font-display mb-6" style={{ color: "var(--text)" }}>
          Admin Login
        </h2>
        <form onSubmit={login} className="flex flex-col gap-4">
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            className="px-4 py-3 rounded-lg border outline-none text-sm"
            style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
          />
          <button type="submit" className="btn-primary justify-center">Login</button>
          {msg && <p className="text-sm text-center" style={{ color: "var(--pink)" }}>{msg}</p>}
        </form>
      </div>
    </div>
  );

  // ── Admin dashboard ──
  return (
    <div className="min-h-screen pt-20 pb-16 px-4 md:px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold font-display" style={{ color: "var(--text)" }}>
              Timeline Admin
            </h1>
            <p className="text-sm font-mono mt-1" style={{ color: "var(--text3)" }}>
              {items.length} items total
            </p>
          </div>
          <button onClick={logout} className="btn-outline flex items-center gap-2 text-sm">
            <LogOut size={14} strokeWidth={2} /> Logout
          </button>
        </div>

        {/* Toast */}
        {msg && (
          <div
            className="mb-6 px-4 py-3 rounded-lg text-sm border"
            style={{
              background: msgType === "success" ? "rgba(38,222,129,0.1)" : "rgba(255,107,157,0.1)",
              borderColor: msgType === "success" ? "rgba(38,222,129,0.3)" : "rgba(255,107,157,0.3)",
              color: msgType === "success" ? "var(--green)" : "var(--pink)",
            }}
          >
            {msg}
          </div>
        )}

        {/* Form */}
        <div className="rounded-2xl border p-6 mb-8"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
          <h3 className="text-lg font-bold font-display mb-5" style={{ color: "var(--text)" }}>
            {editing ? "Edit Item" : "Add New Item"}
          </h3>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>Type</label>
              <select
                value={form.type}
                onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                className="px-3 py-2.5 rounded-lg border outline-none text-sm"
                style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
              >
                {TYPES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Title */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>Title *</label>
              <input
                required
                value={form.title}
                onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
                placeholder="e.g. React Intern at ATG"
                className="px-3 py-2.5 rounded-lg border outline-none text-sm"
                style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
              />
            </div>

            {/* Description */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>Description *</label>
              <textarea
                required
                value={form.description}
                onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
                placeholder="Describe this milestone..."
                rows={3}
                className="px-3 py-2.5 rounded-lg border outline-none text-sm resize-y"
                style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
              />
            </div>

            {/* Date + Link */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>Date *</label>
                <input
                  required type="date"
                  value={form.date}
                  onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                  className="px-3 py-2.5 rounded-lg border outline-none text-sm"
                  style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>Link (optional)</label>
                <input
                  value={form.link}
                  onChange={e => setForm(f => ({ ...f, link: e.target.value }))}
                  placeholder="https://..."
                  className="px-3 py-2.5 rounded-lg border outline-none text-sm"
                  style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
                />
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold font-display" style={{ color: "var(--text2)" }}>Tags (comma separated)</label>
              <input
                value={form.tags}
                onChange={e => setForm(f => ({ ...f, tags: e.target.value }))}
                placeholder="React, Node.js, MongoDB"
                className="px-3 py-2.5 rounded-lg border outline-none text-sm"
                style={{ background: "var(--bg3)", borderColor: "var(--border2)", color: "var(--text)" }}
              />
            </div>

            {/* Image uploader */}
            <ImageUploader
              value={form.image}
              onChange={url => setForm(f => ({ ...f, image: url }))}
            />

            {/* Featured */}
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={e => setForm(f => ({ ...f, featured: e.target.checked }))}
                className="w-4 h-4 accent-[var(--purple)]"
              />
              <span className="text-sm" style={{ color: "var(--text2)" }}>Mark as featured</span>
            </label>

            {/* Actions */}
            <div className="flex gap-3 pt-2">
              <button type="submit" className="btn-primary flex items-center gap-2">
                {editing ? <><Pencil size={14} strokeWidth={2} /> Update</> : <><Plus size={14} strokeWidth={2} /> Add Item</>}
              </button>
              {editing && (
                <button type="button" className="btn-outline"
                  onClick={() => { setEditing(null); setForm(EMPTY_FORM); }}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>

        {/* Items list */}
        <div className="rounded-2xl border p-6"
          style={{ background: "var(--bg2)", borderColor: "var(--border)" }}>
          <h3 className="text-lg font-bold font-display mb-5" style={{ color: "var(--text)" }}>
            All Items ({items.length})
          </h3>

          <div className="flex flex-col gap-3">
            {[...items].sort((a, b) => new Date(b.date) - new Date(a.date)).map(item => (
              <div
                key={item._id}
                className="flex items-center gap-3 p-3 rounded-xl border"
                style={{ borderColor: "var(--border)", background: "var(--bg3)" }}
              >
                {/* Thumbnail */}
                {item.image ? (
                  <img src={item.image} alt={item.title}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0" />
                ) : (
                  <div className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center border"
                    style={{ background: "var(--bg4)", borderColor: "var(--border)" }}>
                    <Plus size={16} style={{ color: "var(--text3)" }} />
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded"
                      style={{ background: "rgba(155,89,255,0.1)", color: "var(--purple)" }}>
                      {item.type}
                    </span>
                    <span className="text-sm font-semibold truncate" style={{ color: "var(--text)" }}>
                      {item.title}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono mt-0.5" style={{ color: "var(--text3)" }}>
                    {new Date(item.date).toLocaleDateString()}
                  </p>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleEdit(item)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border
                      transition-colors duration-200 hover:border-[var(--purple)]"
                    style={{ borderColor: "var(--border)", color: "var(--text2)", background: "var(--bg)" }}
                  >
                    <Pencil size={13} strokeWidth={2} />
                  </button>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center border
                      transition-colors duration-200"
                    style={{ borderColor: "rgba(255,107,157,0.3)", color: "var(--pink)", background: "rgba(255,107,157,0.08)" }}
                  >
                    <Trash2 size={13} strokeWidth={2} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}