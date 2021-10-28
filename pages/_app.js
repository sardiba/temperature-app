import '../styles/globals.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ margin: 16 }}>
      <nav
        style={{
          display: 'flex',
          gap: 16,
          alignItems: 'center',
          marginBottom: 16,
        }}
      >
        <Link href="/">
          <a>🏠</a>
        </Link>
        <Link href="/fahrenheit-to-celsius">
          <a>Convert celsius to fahrenheit</a>
        </Link>
        <Link href="/celsius-to-fahrenheit">
          <a>Convert fahrenheit to celsius</a>
        </Link>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
