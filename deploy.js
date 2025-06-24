// deploy.js (versão automática com commit e push)
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Caminhos
const outDir = path.resolve("out");
const docsDir = path.resolve("docs");

// Função para copiar arquivos recursivamente
function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Apaga pasta docs/
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true });
  console.log("🔁 Pasta docs/ removida.");
}

// 2. Gera build
console.log("🚀 Gerando build...");
execSync("npm run build", { stdio: "inherit" });

// 3. Copia arquivos
console.log("📂 Copiando arquivos de out/ para docs/...");
copyRecursive(outDir, docsDir);

// 4. Commit e push
try {
  console.log("📤 Commitando e fazendo push para o GitHub...");
  execSync("git add docs -f", { stdio: "inherit" });
  execSync('git commit -m "🚀 Deploy automático via script"', { stdio: "inherit" });
  execSync("git push origin main", { stdio: "inherit" });
  console.log("✅ Site publicado no GitHub Pages com sucesso!");
} catch (error) {
  console.error("⚠️ Erro ao commitar ou fazer push. Verifique se há mudanças reais ou se já está atualizado.");
}
