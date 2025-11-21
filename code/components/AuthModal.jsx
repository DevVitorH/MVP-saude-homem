import { useState } from "react";

export default function AuthModal({ close }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleRegister(e) {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.error || "Erro ao cadastrar");
      } else {
        setMessage("Conta criada com sucesso!");
      }
    } catch (err) {
      setMessage("Erro de conexão com o servidor");
    }

    setLoading(false);
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Criar Conta</h2>

        <form onSubmit={handleRegister} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Criar Conta"}
          </button>
        </form>

        {message && (
          <p style={{ marginTop: "10px", color: message.includes("sucesso") ? "green" : "red" }}>
            {message}
          </p>
        )}

        <button style={styles.closeBtn} onClick={close}>Fechar</button>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    width: "350px",
    textAlign: "center"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    marginTop: "10px"
  },
  closeBtn: {
    marginTop: "15px",
    background: "transparent",
    color: "red",
    border: "none",
    cursor: "pointer"
  }
};
