# Instrucciones de Despliegue

## 🚀 Desarrollo Local

Para ejecutar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación se abrirá en [http://localhost:3000](http://localhost:3000)

## 📦 Build de Producción

Para crear un build optimizado para producción:

```bash
npm run build
```

Esto creará una carpeta `build` con los archivos optimizados.

## 🧪 Testing

Para ejecutar los tests:

```bash
npm test
```

## 📋 Requisitos del Sistema

- Node.js >= 14.0.0
- npm >= 6.0.0

## 🌐 Opciones de Despliegue

### GitHub Pages
1. Instalar gh-pages: `npm install --save-dev gh-pages`
2. Agregar script de deploy al package.json
3. Ejecutar: `npm run deploy`

### Netlify
1. Conectar repositorio GitHub a Netlify
2. Build command: `npm run build`
3. Publish directory: `build`

### Vercel
1. Conectar repositorio GitHub a Vercel
2. Se despliega automáticamente con cada push

## 👤 Desarrollador

Creado por **Menendez2004**
Email: kevinmenendezzepda@gmail.com