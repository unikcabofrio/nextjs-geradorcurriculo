import * as S from "@/styles/globalStyle"

export const metadata = {
  title: "Currículo - Unik Cabo Frio",
  description: "Site criado em next js focado em ajudar pessoas com dificuldade de criar curriculos",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={S.roboto.className}>{children}</body>
    </html>
  );
}
