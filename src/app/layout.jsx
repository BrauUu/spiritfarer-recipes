import localFont from 'next/font/local'

import backgroundDay from '../../public/images/backgrounds/background-day.png'
import backgroundNight from '../../public/images/backgrounds/background-night.png'
import backgroundDawn from '../../public/images/backgrounds/background-dawn.png'
import backgroundDusk from '../../public/images/backgrounds/background-dusk.png'

import "./globals.css";

export const metadata = {
  title: "📝 Spiritfarer: Recipes Book",
  description: "Your favorite dishes are here",
};

const defaultFont = localFont({
  src: [
    {
      path: '../../public/fonts/nunito.ttf',
      style: 'normal'
    },
    {
      path: '../../public/fonts/nunito-italic.ttf',
      style: 'italic'
    }
  ],
  variable: "--font-default",
})

const titleFont = localFont({
  src: '../../public/fonts/lora.ttf',
  variable: "--font-title",
})

export default function RootLayout({children}) {

  const getBackgroundImage = () => {
    const date = new Date()
    const hour = date.getHours()
    if (hour >= 5 && hour <= 7) {
      return backgroundDawn.src
    }
    if (hour > 7 && hour <= 17) {
      return backgroundDay.src
    }
    if (hour > 17 && hour <= 19) {
      return backgroundDusk.src
    }
    return backgroundNight.src
  }

  return (
    <html lang="pt-br">
      <body
        className={`${defaultFont.className} bg-no-repeat bg-center bg-cover h-screen`}
        style={{backgroundImage: `url(${getBackgroundImage()})`}}
      >
        {children}
      </body>
    </html>
  );
}