# 📘 Passo a passo para contribuir com o projeto (branch `develop`)

## 1. Clone o repositório (caso ainda não tenha clonado)

```bash
git clone https://github.com/nep-computacao/mapa-interativo.git
cd mapa-interativo
```

## 2. Verifique em qual branch você está atualmente

```bash
git branch
```

## 3. Mude para a branch `develop` caso esteja em um branch diferente.

```bash
git fetch
git switch develop
```

> Caso `git switch develop` não funcione diretamente:
```bash
git checkout -b develop origin/develop
```

## 4. Faça suas alterações no projeto

> Edite, adicione arquivos ou modifique o que for necessário.

## 5. Adicione os arquivos alterados ao stage

```bash
git add .
```

## 6. Faça o commit das alterações com uma mensagem clara

```bash
git commit -m "feat: descrição clara da alteração feita"
```

## 7. Envie suas alterações para a branch `develop` no repositório remoto

```bash
git push origin develop
```

---

# 📝 Verbos comuns para mensagens de commit (Conventional Commits)

| Verbo      | Descrição                                                    |
|------------|--------------------------------------------------------------|
| `feat`     | Nova funcionalidade ou recurso                               |
| `fix`      | Correção de bug                                              |
| `docs`     | Mudanças em documentação                                     |
| `style`    | Alterações que não afetam o código (espaços, formatação)     |
| `refactor` | Refatoração de código sem adicionar funcionalidade           |
| `perf`     | Melhorias de performance                                     |
| `test`     | Adição ou correção de testes                                 |
| `chore`    | Atualizações de tarefas administrativas, build, etc.         |

> Exemplo de mensagem:
```bash
git commit -m "fix: corrige problema de validação no formulário"
```
