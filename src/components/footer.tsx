export const Footer = () => {
  const links = [
    { href: "https://www.linkedin.com/in/vuinishiusu/", text: "LinkedIn" },
    { href: "https://github.com/wuvinotre", text: "GitHub" },
    {
      href: "https://bsky.app/profile/vuinishiusu.codafofo.club",
      text: "Bluesky",
    },
  ];

  return (
    <footer className='bg-neutral-900 dark:bg-neutral-800 py-5'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-center items-center space-x-6'>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className='hover:underline lg:text-lg dark:text-neutral-300'
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
