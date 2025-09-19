# E-Commerce Mini — Backend

Backend untuk proyek E-Commerce Mini dibuat dengan Node.js, Express dan Prisma.

## Ringkasan singkat
- Bahasa: JavaScript (ES Modules)
- Framework: Express
- ORM: Prisma
- Autentikasi: JWT (access + refresh)
- Upload file: Multer
- Role-based: Admin, Staff, Customer

## Persyaratan
- Node.js >= 18
- npm
- PostgreSQL (atau DB lain yang dikonfigurasi di DATABASE_URL)
- Prisma CLI (opsional untuk migrasi)

## Instalasi & Menjalankan (Linux)
1. Clone / buka folder proyek:
   cd /home/hadi-rachmat-s/Documents/Project/latihan-backend/e-commerce-mini/app-Ecommerce-mini-backend

2. Install dependensi:
   npm install

3. Siapkan file .env (contoh variabel penting):
   - DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
   - ACCESS_TOKEN_SECRET=secret_access
   - REFRESH_TOKEN_SECRET=secret_refresh
   - PORT=3000
   - UPLOAD_DIR=upload

4. Generate Prisma client (jika menggunakan Prisma schema):
   npx prisma generate

5. Jalankan migrasi (jika ada):
   npx prisma migrate dev --name init

6. Jalankan server:
   npm run start
   (default: nodemon src/main.js)

## Struktur penting
- src/main.js — entry aplikasi
- src/configuration — konfigurasi App dan database (Prisma)
- src/domain/valueObject — value objects & validasi domain (mis. role)
- src/application — business logic / services
- src/interface — routes / controllers
- src/middleware — middleware (auth, error handling)
- src/error/ResponseError.js — error terstruktur
- src/helpers — util seperti multer helpers
- prisma/ — schema Prisma (jika ada)

## Validasi role
Role divalidasi sebagai tipe data tertentu di value object. Pastikan nilai role sesuai tipe yang diharapkan (contoh: 'number' jika memakai angka, atau 'string' jika memakai teks).

## Testing
Belum ada setup testing. Tambahkan testing (Jest / Vitest) jika diperlukan.

## Catatan pengembangan
- Gunakan Postman / Insomnia untuk menguji endpoint.
- Static files (upload) dilayani dari direktori upload (cek konfigurasi App).
- Periksa file value object untuk aturan domain (mis. src/domain/valueObject/public/auth/registerVO/role.js).

## Kontribusi
Ikuti pola folder (domain → application → infrastructure → interface). Buat PR dengan deskripsi perubahan dan migrasi Prisma jika mengubah schema.

## Lisensi
ISC
