import DashboardIcon from '@mui/icons-material/Dashboard';

export const metadata = {
  title: '掲示板app',
  description: 'react-station2',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body>
        <header><h1>掲示板app</h1></header>
        {children}
        <footer><address>&copy;2023 react-station2</address></footer>
      </body>
    </html>
  )
}
