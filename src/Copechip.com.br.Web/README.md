# Assets do MVC

No diretório `src/Copechip.com.br.Web`, instale as versões do lockfile e gere os assets antes de compilar ou publicar a aplicação .NET.

```sh
npm ci
npm run build
```

Se o npm reportar `UNABLE_TO_VERIFY_LEAF_SIGNATURE` no Windows, rode `$env:NODE_USE_SYSTEM_CA = '1'` no PowerShell antes de `npm ci` para usar os certificados confiáveis do sistema.

Rode `npm run build` novamente quando mudar as classes Tailwind nas views Razor. Use `@Url.Content("~/generated/tailwind.css")` para resolver o caminho do CSS em uma view.

- Tailwind CSS em `~/generated/tailwind.css`.
- Tom Select em `~/generated/vendor/tom-select/`, com o JavaScript `tom-select.complete.min.js` e o CSS `tom-select.min.css`.
- SweetAlert2 em `~/generated/vendor/sweetalert2/`, com o JavaScript `sweetalert2.min.js` e o CSS `sweetalert2.min.css`.
