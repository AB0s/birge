import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
 <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Жүргізіңіз, қосылыңыз, тойлаңыз: сіздің оқиғаларыңыз, біздің платформа!</h1>
            <p className="p-regular-20 md:p-regular-24">Біздің әлемдік қауымдастықпен әлемдік деңгейдегі компаниялардағы тәлімгерлерімізден пайдалы кеңестерді брондап, үйреніңіз.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
               Қазір бастаңыз
              </Link>
            </Button>
          </div>

          <Image 
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section> 
    </main>
  )
}
