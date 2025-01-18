document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault(); // Previne o recarregamento da página
  
    // Capturar os valores do formulário
    const email = e.target.email.value;
    const password = e.target.password.value;
  
    // Enviar os dados para a API de login
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        // Login bem-sucedido: redirecionar ou mostrar sucesso
        alert("Login successful!");
        console.log("Token:", data.token);
        // Exemplo: Redirecionar para outra página
        // window.location.href = "/dashboard.html";
      } else {
        // Mostrar mensagem de erro
        document.getElementById("feedback").innerText = data.error || "Login failed.";
      }
    } catch (error) {
      console.error("Error:", error);
      document.getElementById("feedback").innerText = "An error occurred. Please try again.";
    }
  });
  
  // Lidar com o clique no botão "Sign up"
  document.getElementById("signupLink").addEventListener("click", () => {
    alert("Redirect to sign-up page!");
    // Exemplo: Redirecionar para página de cadastro
    // window.location.href = "/register.html";
  });
  