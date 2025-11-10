import { Metadata } from 'next'
import { motion } from 'framer-motion'
import { Check, Users, Wrench, Award, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Despre noi',
  description: '747 Detailing Club - Peste 10 ani de experiență în detailing auto premium. Echipa noastră de profesioniști transformă mașinile cu pasiune și atenție la detalii.',
  openGraph: {
    title: 'Despre 747 Detailing Club | Experiență și Pasiune',
    description: 'Peste 10 ani de experiență în detailing auto premium. Echipa noastră transformă mașinile cu pasiune și atenție la detalii.',
    url: 'https://747detailingclub.ro/despre-noi',
  },
}

export default function DespreNoiPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-warm-white mb-6">
              Despre noi
            </h1>
            <p className="text-lg text-warm-white/80 leading-relaxed">
              Peste 10 ani de experiență în transformarea mașinilor cu atenție la detalii și pasiune pentru perfecțiune.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-carbon">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-invert max-w-none">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-6">
                Pasiunea noastră
              </h2>
              <p className="text-lg text-warm-white/80 leading-relaxed mb-6">
                La 747 Detailing Club, transformăm mașinile nu doar prin servicii de înaltă calitate, ci prin pasiunea pentru perfecțiune și atenția la fiecare detaliu. Fiecare proiect este o oportunitate de a crea ceva remarcabil.
              </p>
              <p className="text-lg text-warm-white/80 leading-relaxed mb-6">
                Cu peste 10 ani de experiență în domeniu, am dezvoltat tehnici și procese care ne permit să oferim rezultate consistente și de durată. Folosim doar produse premium și echipamente profesionale pentru a ne asigura că fiecare mașină iese din garajul nostru într-o stare impecabilă.
              </p>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-6 mt-12">
                Valori
              </h2>
              <ul className="space-y-4 text-warm-white/80">
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg"><strong className="text-warm-white">Calitate premium:</strong> Folosim doar produse și tehnici de top pentru rezultate durabile.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg"><strong className="text-warm-white">Atenție la detalii:</strong> Fiecare centimetru pătrat primește atenția cuvenită.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg"><strong className="text-warm-white">Transparență:</strong> Comunicăm clar despre proces și așteptări.</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg"><strong className="text-warm-white">Pasiune:</strong> Iubim ce facem și se vede în fiecare proiect finalizat.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-gold mb-2">10+</div>
              <div className="text-warm-white/70">Ani experiență</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-gold mb-2">500+</div>
              <div className="text-warm-white/70">Mașini transformate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-gold mb-2">5★</div>
              <div className="text-warm-white/70">Rating mediu</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-display font-bold text-gold mb-2">100%</div>
              <div className="text-warm-white/70">Satisfacție clienți</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-carbon">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                <Users className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-4">
                Echipa noastră
              </h2>
              <p className="text-lg text-warm-white/80 max-w-2xl mx-auto">
                Profesioniști dedicați cu experiență în detailing auto premium
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-metallic/50 rounded-xl p-6 border border-metallic-light">
                <h3 className="text-xl font-display font-bold text-gold mb-3">
                  Experiență certificată
                </h3>
                <p className="text-warm-white/80 leading-relaxed">
                  Echipamentul nostru este format din specialiști certificați în detailing auto, cu ani de experiență în lucrul cu produse premium și tehnici avansate. Fiecare membru al echipei este continuu în formare pentru a rămâne la curent cu cele mai noi tehnologii și metode.
                </p>
              </div>
              <div className="bg-metallic/50 rounded-xl p-6 border border-metallic-light">
                <h3 className="text-xl font-display font-bold text-gold mb-3">
                  Pasiune și dedicare
                </h3>
                <p className="text-warm-white/80 leading-relaxed">
                  Nu facem doar o treabă - transformăm mașini cu pasiune. Fiecare proiect primește aceeași atenție și dedicare, indiferent de marca sau modelul mașinii. Ne mândrim cu faptul că fiecare client pleacă mulțumit și cu o mașină care arată ca nouă.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment & Technology Section */}
      <section className="py-16 lg:py-24 bg-metallic/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/20 rounded-full mb-4">
                <Wrench className="w-8 h-8 text-gold" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-warm-white mb-4">
                Echipamente și tehnologie
              </h2>
              <p className="text-lg text-warm-white/80 max-w-2xl mx-auto">
                Folosim doar echipamente profesionale și produse premium pentru rezultate de durată
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-carbon rounded-xl p-6 border border-metallic-light text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full mb-4">
                  <Shield className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-bold text-warm-white mb-2">
                  Produse premium
                </h3>
                <p className="text-sm text-warm-white/70">
                  Colaborăm doar cu branduri recunoscute în industria detailing-ului auto pentru garanția calității.
                </p>
              </div>
              <div className="bg-carbon rounded-xl p-6 border border-metallic-light text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full mb-4">
                  <Wrench className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-bold text-warm-white mb-2">
                  Echipamente profesionale
                </h3>
                <p className="text-sm text-warm-white/70">
                  Polizorii, aspiratoarele și toate echipamentele noastre sunt de nivel profesional pentru rezultate optime.
                </p>
              </div>
              <div className="bg-carbon rounded-xl p-6 border border-metallic-light text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gold/20 rounded-full mb-4">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display font-bold text-warm-white mb-2">
                  Tehnici avansate
                </h3>
                <p className="text-sm text-warm-white/70">
                  Aplicăm tehnici moderne și procese testate pentru a obține cele mai bune rezultate posibile.
                </p>
              </div>
            </div>
            <div className="mt-12 bg-metallic/50 rounded-xl p-8 border border-metallic-light">
              <h3 className="text-xl font-display font-bold text-gold mb-4">
                Garanție calitate
              </h3>
              <p className="text-warm-white/80 leading-relaxed mb-4">
                Ne asigurăm că fiecare serviciu este executat la cel mai înalt standard. Oferim garanție pentru toate serviciile noastre și suntem alături de clienți pentru orice întrebare sau problemă care ar putea apărea după finalizarea lucrării.
              </p>
              <ul className="space-y-2 text-warm-white/80">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Garanție pentru ceramic coating - până la 5 ani</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Suport post-serviciu pentru întrebări și recomandări</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span>Rezolvare promptă pentru orice problemă raportată</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

