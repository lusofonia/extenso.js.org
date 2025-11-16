import { Button } from '@/components/ui/button'
import { Github, BookOpen } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-0 text-xl font-bold">
          <span className="text-foreground">Extenso</span>
          <span className="text-primary">.js</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </Link>
          <Link href="#installation" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Instalação
          </Link>
          <Link href="https://github.com/lusofonia/extenso.js#readme" target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/lusofonia/extenso.js#readme" target="_blank">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline ml-0">Docs</span>
            </Link>
          </Button>
          <Button variant="default" size="sm" asChild>
            <Link href="https://github.com/lusofonia/extenso.js" target="_blank">
              <Github className="h-4 w-4" />
              <span className="hidden sm:inline ml-0">GitHub</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
