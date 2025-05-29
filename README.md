# Maailma riigid – Praktika 4. Frontend
**Autor:** tKozuhhar<br>
**Kursus:** Veebiprogrammeerimine<br>

## Projekti kirjeldus
See on Reacti rakendus, mis suhtleb REST Countries API-ga, et kuvada teavet maailma riikide kohta. Rakendus kasutab React funktsionaalseid komponente ja hooks’e oleku haldamiseks.

Iga riigil on oma detailvaade, millele pääseb ligi React Routeri kaudu. Kasutajal on võimalik otsida riike nime järgi ja tulemusi sirvida lehekülgede kaupa.

Kasutatud tehnoloogiad:
- **React.js**
- **React Router DOM**
- **Material UI (MUI)** (kasutajaliidese kujundus)
- **Hooks** (useState, useEffect, useParams, useNavigate)
- **REST Countries API** (välisandmete allikas)

Projekti struktuur:
- node_modules/          # Sõltuvused (automaatselt loodud)
- public/
    - index.html         # Põhi-HTML mall Reacti jaoks
    - manifest.json      # Veebiäpi metaandmed
- src/
    - components/      
        - CountryList.js # Kuvab riikide otsingutulemuste loendi
        - CountryInfo.js # Kuvab üksiku riigi detailinfo
    - App.css            # Rakenduse üldine stiil
    - index.css          # Globaalne stiilifail
    - index.js           # Sisenemispunkt, renderdab <App />
    - App.js             # Põhiline rakenduse loogika ja marsruutimine
    - reportWebVitals.js # Tulemuslikkuse mõõtmine
- package.json           # Projekti metaandmed ja sõltuvused
- package-lock.json      # Täpne versioonihaldus sõltuvustele
- README.md              # Dokumentatsiooni fail

Vastavus ülesande nõuetele:
- On loodud Reacti rakendus, mis suhtleb REST Countries API-ga
- Kuvatakse riikide kohta teavet
- On kasutatud Reacti funktsionaalseid komponente ja haake (hooks) oleku haldamiseks
- On kasutatud React Routerit, et luua iga riigi jaoks eraldi leht üksikasjaliku teabega
- On olemas otsingukomponent, mis võimaldab sisestada riigi nime
- On olemas riikide loend, mis kuvatakse otsingutulemustena
- Riigi valimiseks kuvatakse selle kohta üksikasjalik teave: lipp, nimi, pealinn, rahvaarv, pindala, keeled, valuutad
- On loodud riikide loendi jaoks lehekülgede kaupa pagineerimist

## INSTALLIMA. Kuidas käivitada
Lae projekt alla https://github.com/tKozuhhar/Praktika4_Frontend.git <br>
Paigaldakse Node.js (LTS) järgmiselt lingilt: https://nodejs.org/en <br>
LTS (Long Term Support) on stabiilne versioon pikaajalise toega. Soovitatav enamiku kasutajate jaoks.<br>
Pärast seda paigalda paket projektis: <br>
`npm install` <br>
Pärast seda kasutatakse käsk: <br>
`npm start` <br>
Rakendus käivitatakse tavaliselt aadressil `http://localhost:3000`.

## Funktsionaalsus
- Otsing: Kasutaja saab sisestada riigi nime, mille põhjal kuvatakse tulemused.
- Lehekülgede kaupa pagineerimine: Otsingutulemused jagatakse lehekülgedeks (10 riiki lehekülje kohta).
- Riigi üksikasjad: Kui kasutaja klikib riigi nimel, avatakse detailne vaade, kus kuvatakse:
    - Lipp
    - Nimi
    - Pealinn
    - Rahvaarv
    - Pindala
    - Keeled
    - Valuutad
- Tagasi-nupp: Iga detailleht sisaldab nuppu, mis viib tagasi riikide nimekirja.

## Kasutatavad marsruudid (React Router)

| **Marsruut**     | **Kirjeldus**                                 | 
|------------------|-----------------------------------------------|
| /                | Otsinguväli, riikide nimekiri ja pagineerimine|          
| /country/:cca3   | Valitud riigi üksikasjade vaade               | 

## Näidised

- Otsing
Sisesta näiteks estonia, et näha vastet nimekirjas.
- Riigi detailid
Kui vajutada riigi nimel, avaneb detailvaade, nt:
`http://localhost:3000/country/EST`

## Märkused
- API: https://restcountries.com/v3.1/all – laetakse kõik riigid
- Detailinfo päring: https://restcountries.com/v3.1/alpha/:cca3
- Käesolevas rakenduses kasutatakse ainult client-side renderdust
- Kõik andmed tulevad REST Countries API kaudu, seega stabiilne internetiühendus on vajalik
