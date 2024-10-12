export function Footer () {
  return (
    <div className='flex flex-col items-center justify-center gap-y-4 py-4 text-center text-white text-sm bg-black'>
      <p>© {new Date().getFullYear()} Yordan Aserama</p>
      <p>Built with ❤️ by <a href="https://github.com/yordanluturyalii" target="_blank" rel="noopener noreferrer">Yordan Luturyali</a></p>
      <p>Powered by <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a></p>
    </div>
  );
}
