# Instrucțiuni de Securitate pentru AI

## 🔒 Reguli Absolute

### Date Sensibile — NU se commit niciodată în cod:
- Credențiale MongoDB (MONGO_URL, DB_NAME)
- Chei API (Calendly, Google Analytics, orice serviciu terț)
- Token-uri de autentificare sau sesiune
- Date personale ale pacienților sau ale psihologului (telefon real, email real, adresă exactă)
- Fișiere `.env`, `.env.local`, `.env.production`

### Fișiere Interzise în Git:
```
.env
.env.*
*.pem
*.key
node_modules/
__pycache__/
*.log
```

### Reguli de Cod:
1. **Nu hardcoda credențiale** — folosește variabile de mediu (`process.env.*`, `os.environ[]`)
2. **Nu expune endpoint-uri de debug** în producție
3. **CORS** — nu lăsa `allow_origins=["*"]` în producție; configurează doar domeniile permise
4. **Input validation** — validează toate datele din formularul de contact (sanitizare XSS)
5. **Rate limiting** — adaugă rate limiting pe endpoint-urile API (contact form, status)
6. **HTTPS only** — asigură-te că site-ul rulează doar pe HTTPS în producție
7. **Headers de securitate** — Content-Security-Policy, X-Frame-Options, X-Content-Type-Options

### Dependențe:
- Nu instala pachete necunoscute fără verificare
- Verifică `npm audit` / `pip audit` înainte de deploy
- Actualizează dependențele cu vulnerabilități cunoscute

### Date GDPR (context România/UE):
- Site-ul nu colectează date personale ale pacienților (doar formularul de contact)
- Formularul de contact trebuie să aibă consimțământ explicit
- Nu se stochează cookies non-esențiale fără consimțământ
- Calendly gestionează propriile date — menționează asta în politica de confidențialitate

### La Code Review, verifică:
- [ ] Nu sunt credențiale hardcodate
- [ ] `.env` e în `.gitignore`
- [ ] CORS e configurat corect pentru producție
- [ ] Input-urile sunt validate și sanitizate
- [ ] Nu sunt endpoint-uri de debug expuse
- [ ] Dependențele nu au vulnerabilități critice
