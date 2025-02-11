import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
          rel="stylesheet"
        />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                AOS.init();
              });
            `,
          }}
        />
      </Head>
      <nav className="navbar">
        <Link href="/" className="logo">
          <span className="logo-text-up">UP</span>
          <span>-</span>
          <span className="logo-text-start">START</span>
        </Link>

        <div className="nav-links">
          <Link href="#how-it-works" className="nav-link">
            How it works
          </Link>
          <Link href="#features" className="nav-link">
            Features
          </Link>
          <Link href="#blog" className="nav-link">
            Blog
          </Link>
          <Link href="#pricing" className="nav-link">
            Pricing
          </Link>
          <Link href="/login" className="btn btn-outline">
            Log in
          </Link>
          <Link href="/get-started" className="btn btn-primary">
            Get started
          </Link>
        </div>
      </nav>

      <main className="hero">
        <div className="geometric-pattern"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-subtitle">UP-START FINANCE SYSTEM</h2>
            <h1 className="hero-title">Unlock the next generation banking experience</h1>
            <p className="hero-description">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
              enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <div className="hero-buttons">
              <Link href="/get-started" className="btn btn-accent">
                Get started
              </Link>
              <Link href="/login" className="btn btn-outline">
                Log in
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20222720-4AYRAJkvWfHvUlxsGRfmMkrr5a6UGp.png"
              alt="Banking app interface on iPhone"
              width={500}
              height={600}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  )
}
