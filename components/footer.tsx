import { Github, Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4">
      <div className="container mx-auto max-w-[900px]">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center text-xl font-bold mb-4">
              <span className="text-white">Extenso</span>
              <span className="text-[#86efac]">.js</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Biblioteca open source para escrever números por extenso em português.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://github.com/lusofonia/extenso.js" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="https://github.com/lusofonia/extenso.js#readme" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="https://github.com/lusofonia/extenso.js/issues" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  Reportar Bug
                </Link>
              </li>
              <li>
                <Link href="https://github.com/lusofonia/extenso.js/blob/master/LICENSE" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  Licença MIT
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-white">Comunidade</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="https://github.com/lusofonia/extenso.js/graphs/contributors" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  Contribuidores
                </Link>
              </li>
              <li>
                <Link href="https://github.com/lusofonia/extenso.js/releases" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  Releases
                </Link>
              </li>
              <li>
                <Link href="https://www.npmjs.com/package/extenso" target="_blank" className="text-gray-400 hover:text-[#86efac] transition-colors">
                  NPM Package
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400 flex items-center gap-2">
            Desenvolvido e mantido por
            <Link href="https://www.linkedin.com/in/matheusalvesbrx/" target="_blank" className="text-white hover:text-[gray] transition-colors">
              Fidalgo IT Solutions
            </Link>
            desde 2015.
          </p>
          
          <Link 
            href="https://github.com/lusofonia/extenso.js" 
            target="_blank"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <Github className="h-4 w-4" />
            <span>© 2015 - 2025 Fidalgo IT Solutions | MIT</span>
          </Link>
        </div>
      </div>
    </footer>
  )
}
