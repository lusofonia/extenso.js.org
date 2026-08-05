import Link from 'next/link'
import {
  BookOpen,
  Coffee,
  ExternalLink,
  Github,
  Heart,
  Package,
} from 'lucide-react'

import { CopyCommand } from '@/components/copy-command'

const githubUrl = 'https://github.com/lusofonia/extenso.js'

const summary = [
  ['0', 'Motivação', '#motivacao'],
  ['1', 'Funcionalidades', '#funcionalidades'],
  ['2', 'Instalação', '#instalacao'],
  ['3', 'Uso', '#uso'],
  ['4', 'Sintaxe e entradas', '#api'],
  ['5', 'Opções', '#opcoes'],
  ['6', 'TypeScript', '#typescript'],
  ['7', 'Valores monetários', '#valores-monetarios'],
  ['8', 'Metadados', '#metadados'],
  ['9', 'Validação e migração', '#validacao'],
  ['10', 'Idioma padrão', '#idioma'],
  ['11', 'Contribuições e licença', '#projeto'],
]

const options = [
  ['mode', "number | currency | digit | abbreviated | fraction | measurement | percentage", "'number'", 'Formato do texto retornado.'],
  ['locale', "ao | br | cv | gw | mo | mz | pt | st", "'br'", 'Localidade usada no vocabulário.'],
  ['scale', "'short' | 'long'", "'short'", 'Escala curta ou longa.'],
  ['decimalSeparator', "'point' | 'comma'", "'point'", 'Separador decimal da entrada.'],
  ['removeAccents', 'boolean', 'false', 'Remove sinais diacríticos.'],
  ['textCase', "'lower' | 'upper' | 'title'", '—', 'Capitalização do resultado.'],
  ['currency', 'CurrencyOptions', 'BRL', 'Moeda incorporada ou personalizada.'],
  ['unit', 'MeasurementUnit', '—', 'Unidade usada no modo measurement.'],
]

const features = [
  'Números de até duodecilhões (10³⁹ na escala curta ou 10⁷² na escala longa).',
  'Números negativos e decimais.',
  'Múltiplas moedas, incluindo BRL, EUR e USD.',
  'Localidades de países lusófonos e Macau.',
  'BigInt para números extremamente grandes.',
  'Escalas curta e longa.',
  'Personalização de gênero gramatical.',
  'Ponto ou vírgula como separador decimal.',
  'Percentuais, frações comuns e unidades de medida.',
  'Escrita abreviada, capitalização e saída sem acentos.',
  'API de metadados para moedas e limites de escala.',
  'Zero dependências.',
]

const currencies = [
  ['BRL', 'Real brasileiro', 'padrão'],
  ['AOA', 'Kwanza angolano', ''],
  ['CVE', 'Escudo cabo-verdiano', ''],
  ['XOF', 'Franco CFA de África Ocidental', ''],
  ['MZN', 'Metical moçambicano', ''],
  ['EUR', 'Euro', ''],
  ['STN', 'Dobra de São Tomé e Príncipe', ''],
  ['USD', 'Dólar americano', ''],
  ['MOP', 'Pataca de Macau', ''],
]

function SectionTitle({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="section-title">
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <header className="paper-header">
        <div className="header-inner">
          <Link href="#inicio" className="wordmark"><b aria-hidden="true">ε</b> Extenso.js</Link>
          <nav aria-label="Links principais">
            <Link href="#sumario"><BookOpen aria-hidden="true" /> Sumário</Link>
            <Link href="https://www.npmjs.com/package/extenso" target="_blank" rel="noreferrer"><Package aria-hidden="true" /> npm</Link>
            <Link href={githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</Link>
          </nav>
        </div>
      </header>

      <main id="inicio" className="paper">
        <article>
          <header className="article-header">
            <h1>Extenso.js</h1>
            <p className="subtitle">Números por extenso em português para JavaScript.</p>
            <CopyCommand command="npm install extenso" />
            <div className="article-meta">
              <Link href="https://www.npmjs.com/package/extenso" target="_blank" rel="noreferrer">npm</Link>
              <span>v3.0.0</span>
              <span>Node 22.20+</span>
              <span>MIT</span>
            </div>
          </header>

          <div className="paper-introduction">
            <p>Converte números, valores monetários, percentuais, frações e medidas em texto. Cobre localidades lusófonas e Macau, aceita BigInt, escalas curta e longa e moedas personalizadas — sem dependências.</p>
          </div>

          <section id="motivacao" className="motivation">
            <h2>Por que este projeto existe?</h2>
            <p>Escrever valores em palavras é uma necessidade recorrente em sistemas financeiros, educativos e administrativos — especialmente em cheques, faturas, contratos e outros documentos formais.</p>
            <p>O Extenso.js reúne essas regras em uma API pequena e previsível, para evitar que cada aplicação implemente sua própria versão da conversão e para manter o resultado consistente entre diferentes contextos de uso.</p>
          </section>

          <section id="sumario" className="contents" aria-labelledby="sumario-title">
            <h2 id="sumario-title">Nesta página</h2>
            <ol>
              {summary.map(([number, label, href]) => (
                <li key={href}>
                  <Link href={href}>
                    <span>{number}. {label}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </section>

          <section className="donation donation-inline" aria-labelledby="donation-title">
            <div className="donation-heading">
              <Heart aria-hidden="true" />
              <div>
                <h2 id="donation-title">Apoie a manutenção</h2>
              </div>
            </div>
            <p>O projeto não gera receita direta. Uma contribuição ajuda a financiar manutenção, testes e evolução da biblioteca.</p>
            <div className="donation-links">
              <Link href="https://nubank.com.br/cobrar/193y02/67a7cf95-b24c-4a98-95b2-9ce5daf03e2c" target="_blank" rel="noreferrer">Doar via Pix</Link>
              <Link href="https://www.paypal.com/donate/?hosted_button_id=3TPLED2TF5874" target="_blank" rel="noreferrer"><Coffee aria-hidden="true" /> PayPal</Link>
              <Link href="https://github.com/sponsors/theuves" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub Sponsors</Link>
            </div>
          </section>

          <section id="funcionalidades" className="document-section">
            <SectionTitle number="01">Funcionalidades</SectionTitle>
            <ul className="feature-list">
              {features.map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <aside className="observation">
              <strong>Nota de escala.</strong>
              <p>10³⁹ é o limite da escala curta; 10⁷² é o limite da escala longa.</p>
            </aside>
          </section>

          <section id="instalacao" className="document-section">
            <SectionTitle number="02">Instalação</SectionTitle>
            <p>Instale o pacote pelo npm. As definições de tipo para TypeScript já fazem parte da distribuição.</p>
            <CopyCommand command="npm install extenso" />
            <p className="footnote"><sup>a</sup> Para Yarn, utilize <code>yarn add extenso</code>.</p>
          </section>

          <section id="uso" className="document-section">
            <SectionTitle number="03">Uso</SectionTitle>
            <p>A função padrão recebe o valor a ser convertido e, opcionalmente, um objeto de configuração.</p>

            <figure className="code-figure">
              <figcaption>Conversão simples</figcaption>
              <pre><code><span className="syntax-keyword">import</span> extenso <span className="syntax-keyword">from</span> <span className="syntax-string">&apos;extenso&apos;</span>{'\n\n'}extenso(<span className="syntax-number">123</span>){'\n'}<span className="syntax-comment">//=&gt; &apos;cento e vinte e três&apos;</span></code></pre>
            </figure>

            <h3>3.1. CommonJS</h3>
            <figure className="code-figure">
              <figcaption>Importação com require</figcaption>
              <pre><code><span className="syntax-keyword">const</span> extenso = require(<span className="syntax-string">&apos;extenso&apos;</span>){'\n\n'}extenso(<span className="syntax-number">123</span>){'\n'}<span className="syntax-comment">//=&gt; &apos;cento e vinte e três&apos;</span></code></pre>
            </figure>

            <figure className="code-figure">
              <figcaption>Outros formatos de saída</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;16&apos;</span>, {'{'} locale: <span className="syntax-string">&apos;pt&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;dezasseis&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;1500000&apos;</span>, {'{'} mode: <span className="syntax-string">&apos;abbreviated&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;1,5 mi&apos;</span></code></pre>
            </figure>
          </section>

          <section id="api" className="document-section">
            <SectionTitle number="04">Sintaxe e entradas</SectionTitle>
            <div className="signature"><code>extenso(number[, options]) → string</code></div>

            <h3>4.1. <code>number</code></h3>
            <p>Aceita valores dos tipos <code>string</code>, <code>number</code> ou <code>bigint</code>. Entradas <code>number</code> finitas, inclusive em notação científica, são aceitas e normalizadas. Para inteiros maiores que <code>Number.MAX_SAFE_INTEGER</code>, use string ou BigInt a fim de preservar a precisão. BigInt aceita somente inteiros.</p>
            <p>Strings preservam todos os dígitos fornecidos. O sinal negativo só pode aparecer no início; agrupamentos devem ter um primeiro grupo de um a três dígitos e os demais com exatamente três. O separador decimal precisa ser seguido por dígitos.</p>

            <h3>4.2. <code>options</code></h3>
            <p>Objeto opcional que controla idioma, escala, formato numérico e moeda. Na ausência desse argumento, a saída segue o português do Brasil e a escala curta.</p>

            <ul className="inline-options">
              <li><code>mode</code></li><li><code>scale</code></li><li><code>locale</code></li>
              <li><code>currency</code></li><li><code>removeAccents</code></li>
              <li><code>textCase</code></li><li><code>unit</code></li>
              <li><code>currency.code</code></li><li><code>number.gender</code></li>
              <li><code>currency.rounding</code></li><li><code>currency.showZeroUnit</code></li>
              <li><code>currency.showZeroSubunit</code></li><li><code>currency.fractionDigits</code></li>
              <li><code>number.ordinal</code></li><li><code>decimalSeparator</code></li>
            </ul>

            <aside className="observation">
              <strong>Observação 1.</strong>
              <p>Strings preservam todos os dígitos fornecidos. O separador decimal deve ser compatível com a opção <code>decimalSeparator</code>.</p>
            </aside>
          </section>

          <section id="opcoes" className="document-section">
            <SectionTitle number="05">Opções</SectionTitle>
            <p>A tabela abaixo resume as configurações principais. As subseções seguintes documentam o comportamento de cada opção.</p>

            <div className="table-wrap">
              <table>
                <caption>Opções principais</caption>
                <thead>
                  <tr><th>Opção</th><th>Tipo</th><th>Padrão</th><th>Descrição</th></tr>
                </thead>
                <tbody>
                  {options.map(([name, type, initial, description]) => (
                    <tr key={name}>
                      <td><code>{name}</code></td>
                      <td><code>{type}</code></td>
                      <td><code>{initial}</code></td>
                      <td>{description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3>5.1. <code>options.mode</code></h3>
            <p>Define o modo de escrita: <code>number</code>, <code>currency</code>, <code>digit</code>, <code>abbreviated</code>, <code>percentage</code>, <code>fraction</code> ou <code>measurement</code>.</p>
            <figure className="code-figure">
              <figcaption>Modos de escrita</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;123&apos;</span>){'\n'}<span className="syntax-comment">//=&gt; &apos;cento e vinte e três&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;123&apos;</span>, {'{'} mode: <span className="syntax-string">&apos;currency&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;cento e vinte e três reais&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;123&apos;</span>, {'{'} mode: <span className="syntax-string">&apos;digit&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;um dois três&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;1500000&apos;</span>, {'{'} mode: <span className="syntax-string">&apos;abbreviated&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;1,5 mi&apos;</span></code></pre>
            </figure>

            <figure className="code-figure">
              <figcaption>Percentuais, frações e medidas</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;12.5&apos;</span>, {'{'} mode: <span className="syntax-string">&apos;percentage&apos;</span> {'}'}){`\n`}<span className="syntax-comment">//=&gt; &apos;doze inteiros e cinco décimos por cento&apos;</span>{`\n\n`}extenso(<span className="syntax-string">&apos;3/4&apos;</span>, {'{'} mode: <span className="syntax-string">&apos;fraction&apos;</span> {'}'}){`\n`}<span className="syntax-comment">//=&gt; &apos;três quartos&apos;</span>{`\n\n`}extenso(<span className="syntax-string">&apos;2.5&apos;</span>, {'{'}{`\n  `}mode: <span className="syntax-string">&apos;measurement&apos;</span>,{`\n  `}unit: {'{'} singular: <span className="syntax-string">&apos;quilograma&apos;</span>, plural: <span className="syntax-string">&apos;quilogramas&apos;</span>, gender: <span className="syntax-string">&apos;male&apos;</span> {'}'}{`\n`}{'}'})</code></pre>
            </figure>

            <h3>5.2. <code>options.scale</code></h3>
            <p>A escala curta (<code>short</code>) é usada no Brasil e é o padrão. A escala longa (<code>long</code>) é usada no restante dos países de língua portuguesa. A escrita diverge em valores iguais ou superiores a 10⁹ e nos denominadores decimais correspondentes.</p>
            <figure className="code-figure">
              <figcaption>Escalas curta e longa</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;2,000,000,001&apos;</span>, {'{'} scale: <span className="syntax-string">&apos;short&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;dois bilhões e um&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;2,000,000,001&apos;</span>, {'{'} scale: <span className="syntax-string">&apos;long&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;dois mil milhões e um&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;0.000000000001&apos;</span>, {'{'} scale: <span className="syntax-string">&apos;long&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;um bilionésimo&apos;</span></code></pre>
            </figure>

            <h3>5.3. <code>options.decimalSeparator</code></h3>
            <p>O ponto é o separador decimal padrão (<code>point</code>) e a vírgula separa milhares. Use <code>comma</code> para inverter a interpretação. Essa opção é especialmente importante para entradas fornecidas como string.</p>
            <figure className="code-figure">
              <figcaption>Separadores decimais</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;3.14&apos;</span>){'\n'}<span className="syntax-comment">//=&gt; &apos;três inteiros e quatorze centésimos&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;3,14&apos;</span>, {'{'} decimalSeparator: <span className="syntax-string">&apos;comma&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;três inteiros e quatorze centésimos&apos;</span></code></pre>
            </figure>

            <h3>5.4. <code>options.locale</code></h3>
            <p>Define o vocabulário da localidade. São aceitos <code>ao</code>, <code>br</code>, <code>cv</code>, <code>gw</code>, <code>mo</code>, <code>mz</code>, <code>pt</code> e <code>st</code>. O Brasil é o padrão; as demais usam atualmente as formas numéricas não brasileiras. <code>locale</code> controla o vocabulário, enquanto <code>scale</code> controla a escala numérica.</p>
            <figure className="code-figure">
              <figcaption>Dialetos</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;16&apos;</span>, {'{'} locale: <span className="syntax-string">&apos;br&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;dezesseis&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;16&apos;</span>, {'{'} locale: <span className="syntax-string">&apos;pt&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;dezasseis&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;1,000,000,000&apos;</span>, {'{'} locale: <span className="syntax-string">&apos;pt&apos;</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;um bilião&apos;</span></code></pre>
            </figure>

            <h3>5.5. <code>options.removeAccents</code></h3>
            <p>Quando <code>true</code>, remove acentos e outros sinais diacríticos do resultado. Pode ser combinada com qualquer modo ou localização.</p>
            <figure className="code-figure">
              <figcaption>Saída sem acentos</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;123&apos;</span>, {'{'} removeAccents: <span className="syntax-keyword">true</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;cento e vinte e tres&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;3.14&apos;</span>, {'{'} removeAccents: <span className="syntax-keyword">true</span> {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;tres inteiros e quatorze centesimos&apos;</span></code></pre>
            </figure>

            <h3>5.6. <code>options.textCase</code></h3>
            <p>Controla a capitalização final: <code>lower</code> usa minúsculas, <code>upper</code> usa maiúsculas e <code>title</code> capitaliza as palavras principais, preservando conectivos como “e”, “de” e “por”. Sem essa opção, a capitalização original é mantida.</p>
            <figure className="code-figure">
              <figcaption>Capitalização</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;123&apos;</span>, {'{'} textCase: <span className="syntax-string">&apos;upper&apos;</span> {'}'}){`\n`}<span className="syntax-comment">//=&gt; &apos;CENTO E VINTE E TRÊS&apos;</span>{`\n\n`}extenso(<span className="syntax-string">&apos;123&apos;</span>, {'{'} textCase: <span className="syntax-string">&apos;title&apos;</span> {'}'}){`\n`}<span className="syntax-comment">//=&gt; &apos;Cento e Vinte e Três&apos;</span></code></pre>
            </figure>

            <h3>5.7. <code>options.currency</code></h3>
            <p>Configura uma moeda incorporada ou personalizada. Informar <code>currency</code> ativa automaticamente o modo monetário, exceto quando outro modo é definido explicitamente. Um objeto vazio usa BRL.</p>

            <div className="table-wrap">
              <table>
                <caption>Moedas incorporadas</caption>
                <thead><tr><th>Código</th><th>Moeda</th><th>Observação</th></tr></thead>
                <tbody>
                  {currencies.map(([code, currency, note]) => (
                    <tr key={code}><td><code>{code}</code></td><td>{currency}</td><td>{note || '—'}</td></tr>
                  ))}
                </tbody>
              </table>
            </div>

            <figure className="code-figure">
              <figcaption>Moedas incorporadas e personalizadas</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;42&apos;</span>, {'{'} currency: {'{'} code: <span className="syntax-string">&apos;EUR&apos;</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;quarenta e dois euros&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;2.01&apos;</span>, {'{'}{ '\n  ' }currency: {'{'}{ '\n    ' }singular: <span className="syntax-string">&apos;crédito&apos;</span>, plural: <span className="syntax-string">&apos;créditos&apos;</span>, gender: <span className="syntax-string">&apos;male&apos;</span>,{'\n    '}subunit: {'{'} singular: <span className="syntax-string">&apos;ficha&apos;</span>, plural: <span className="syntax-string">&apos;fichas&apos;</span>, gender: <span className="syntax-string">&apos;female&apos;</span> {'}'}{'\n  '}{'}'}{'\n'}{'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;dois créditos e uma ficha&apos;</span></code></pre>
            </figure>

            <p>Em uma moeda personalizada, informe os nomes singular e plural e o gênero (<code>male</code> ou <code>female</code>) da unidade e da subunidade. <code>code</code> não pode ser combinado com uma definição personalizada.</p>

            <h3>5.8. Formatação monetária</h3>
            <p><code>currency.rounding</code> define o tratamento das casas excedentes: <code>reject</code> (padrão), <code>truncate</code> ou <code>half-up</code>. <code>showZeroUnit</code> e <code>showZeroSubunit</code> permitem exibir unidades zeradas. Em moedas personalizadas, <code>fractionDigits</code> aceita de 0 a 1.000 casas e usa 2 por padrão.</p>

            <h3>5.9. <code>options.number.gender</code></h3>
            <p>O gênero feminino flexiona unidades, dezenas e centenas, inclusive no grupo dos milhares. Nomes de escala como milhão e bilhão permanecem masculinos.</p>
            <figure className="code-figure">
              <figcaption>Gênero gramatical</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;42&apos;</span>, {'{'} number: {'{'} gender: <span className="syntax-string">&apos;female&apos;</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;quarenta e duas&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;322000&apos;</span>, {'{'} number: {'{'} gender: <span className="syntax-string">&apos;female&apos;</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;trezentas e vinte e duas mil&apos;</span></code></pre>
            </figure>

            <h3>5.10. <code>options.number.ordinal</code></h3>
            <p>Escreve números inteiros na forma ordinal. A opção de gênero também flexiona todos os componentes do ordinal.</p>
            <figure className="code-figure">
              <figcaption>Números ordinais</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;11&apos;</span>, {'{'} number: {'{'} ordinal: <span className="syntax-keyword">true</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;décimo primeiro&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;42&apos;</span>, {'{'} number: {'{'} ordinal: <span className="syntax-keyword">true</span>, gender: <span className="syntax-string">&apos;female&apos;</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;quadragésima segunda&apos;</span>{'\n\n'}extenso(<span className="syntax-string">&apos;1000&apos;</span>, {'{'} number: {'{'} ordinal: <span className="syntax-keyword">true</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;milésimo&apos;</span></code></pre>
            </figure>
          </section>

          <section id="typescript" className="document-section">
            <SectionTitle number="06">TypeScript</SectionTitle>
            <p>O pacote exporta a interface <code>ExtensoOptions</code> e os tipos <code>BuiltInCurrencyOptions</code>, <code>CurrencyDefinition</code>, <code>CurrencyFormattingOptions</code>, <code>CurrencyOptions</code>, <code>CurrencyRounding</code>, <code>CurrencyMetadata</code>, <code>MeasurementUnit</code>, <code>NumberOptions</code>, <code>ScaleLimit</code>, <code>ExtensoMode</code>, <code>ExtensoLocale</code>, <code>ExtensoScale</code>, <code>ExtensoGender</code>, <code>CurrencyCode</code>, <code>DecimalSeparator</code> e <code>TextCase</code>.</p>
            <figure className="code-figure">
              <figcaption>Uso tipado</figcaption>
              <pre><code><span className="syntax-keyword">import</span> extenso, {'{'} <span className="syntax-keyword">type</span> ExtensoOptions {'}'} <span className="syntax-keyword">from</span> <span className="syntax-string">&apos;extenso&apos;</span>{'\n\n'}<span className="syntax-keyword">const</span> options: ExtensoOptions = {'{'} mode: <span className="syntax-string">&apos;number&apos;</span> {'}'}{'\n'}<span className="syntax-keyword">const</span> result: string = extenso(<span className="syntax-number">123</span>, options)</code></pre>
            </figure>
          </section>

          <section id="valores-monetarios" className="document-section">
            <SectionTitle number="07">Valores monetários</SectionTitle>
            <p>No modo <code>currency</code>, moedas incorporadas aceitam zero, uma ou duas casas decimais. Uma casa é completada com zero à direita: <code>1.1</code> representa um real e dez centavos em BRL. Mais casas são rejeitadas por padrão; <code>currency.rounding</code> permite truncamento ou arredondamento decimal exato. Moedas personalizadas podem alterar a precisão com <code>currency.fractionDigits</code>.</p>
            <p>A subunidade da dobra de São Tomé e Príncipe (<code>STN</code>) é o cêntimo.</p>
            <figure className="code-figure">
              <figcaption>Subunidade monetária</figcaption>
              <pre><code>extenso(<span className="syntax-string">&apos;0.01&apos;</span>, {'{'} currency: {'{'} code: <span className="syntax-string">&apos;STN&apos;</span> {'}'} {'}'}){'\n'}<span className="syntax-comment">//=&gt; &apos;um cêntimo&apos;</span></code></pre>
            </figure>
            <p>Códigos e símbolos podem aparecer antes ou depois do valor. Marcadores de moedas diferentes na mesma entrada são ambíguos e geram erro. <code>currency.code</code> tem prioridade sobre uma única moeda detectada.</p>
            <p>No modo <code>number</code>, casas decimais formadas somente por zeros não criam uma fração: <code>1.00</code> equivale a <code>1</code> e <code>-0.00</code> equivale a <code>0</code>. O modo <code>digit</code> preserva todos os dígitos fornecidos.</p>
          </section>

          <section id="metadados" className="document-section">
            <SectionTitle number="08">Metadados</SectionTitle>
            <p>A função exportada também oferece consultas sobre as moedas incorporadas e os limites das escalas. Elas funcionam da mesma forma em ESM, CommonJS e UMD.</p>
            <figure className="code-figure">
              <figcaption>Consulta de metadados</figcaption>
              <pre><code>extenso.listCurrencies(){`\n`}<span className="syntax-comment">//=&gt; metadados das 9 moedas incorporadas</span>{`\n\n`}extenso.getCurrency(<span className="syntax-string">&apos;BRL&apos;</span>){`\n`}<span className="syntax-comment">//=&gt; {'{'} code: &apos;BRL&apos;, singular: &apos;real&apos;, plural: &apos;reais&apos;, ... {'}'}</span>{`\n\n`}extenso.getScaleLimit(<span className="syntax-string">&apos;long&apos;</span>){`\n`}<span className="syntax-comment">//=&gt; {'{'} scale: &apos;long&apos;, largestNamedExponent: 72, maximumDigits: 75, ... {'}'}</span></code></pre>
            </figure>
            <p>Os resultados são cópias dos metadados. Códigos de moeda e escalas inválidos geram <code>TypeError</code>.</p>
          </section>

          <section id="validacao" className="document-section">
            <SectionTitle number="09">Validação e migração</SectionTitle>
            <h3>Validação e erros</h3>
            <p><code>mode</code>, <code>locale</code>, <code>scale</code>, <code>decimalSeparator</code>, <code>removeAccents</code>, <code>textCase</code>, opções numéricas, formatação monetária e todos os campos de moedas e unidades personalizadas são validados em runtime.</p>
            <p>A biblioteca rejeita opções <code>number</code> e <code>currency</code> com tipos inválidos, entrada vazia, sinal isolado, agrupamento inválido, decimal incompleto, ordinais decimais, <code>NaN</code>, infinitos, moedas conflitantes, valores acima da escala escolhida e strings com mais de 1.000 caracteres.</p>

            <h3>Migração da versão 2.x</h3>
            <p>A versão 3 contém mudanças incompatíveis. CommonJS passa a retornar a função diretamente (<code>const extenso = require('extenso')</code>), o pacote requer Node.js 22.20 ou mais recente e entradas e opções inválidas deixam de usar comportamentos permissivos.</p>
            <p>Moedas incorporadas mantêm duas casas decimais e rejeitam casas excedentes por padrão. Para aceitar esses valores, escolha explicitamente <code>truncate</code> ou <code>half-up</code> em <code>currency.rounding</code>.</p>
          </section>

          <section id="idioma" className="document-section">
            <SectionTitle number="10">Idioma padrão</SectionTitle>
            <p>O idioma padrão do Extenso.js é o português brasileiro. A escolha considera os seguintes fatores:</p>
            <ol className="numbered-list">
              <li><strong>Origem do projeto.</strong> O Extenso.js foi criado no Brasil, onde a conversão de números para texto é comum em diversas aplicações.</li>
              <li><strong>População falante.</strong> O Brasil possui a maior população de falantes de português.</li>
              <li><strong>Moeda utilizada.</strong> O real é a moeda mais utilizada entre falantes de português.</li>
              <li><strong>Separador decimal.</strong> A opção <code>decimalSeparator</code> permite escolher ponto ou vírgula sem alterar o dialeto de saída.</li>
            </ol>
            <p>Esses fatores fazem com que a configuração padrão atenda à maioria dos usuários. As localidades <code>ao</code>, <code>cv</code>, <code>gw</code>, <code>mo</code>, <code>mz</code>, <code>pt</code> e <code>st</code> permanecem disponíveis por opção.</p>
          </section>

          <section id="projeto" className="document-section">
            <SectionTitle number="11">Contribuições e licença</SectionTitle>
            <p>Você é de Portugal, Angola, Moçambique ou de outro país onde se fala português? Se identificou diferenças na escrita dos números, abra uma issue para discutirmos como adaptar a biblioteca.</p>
            <p>Também é possível contribuir relatando sugestões ou problemas, enviando um pull request ou comentando diretamente no trecho de código que pode ser aprimorado. Toda contribuição é bem-vinda.</p>
            <p>Mantido por <Link className="text-reference" href="https://www.linkedin.com/in/matheusalvesbrx/" target="_blank" rel="noreferrer">Matheus Alves</Link> e distribuído sob a licença MIT.</p>
            <div className="project-links">
              <Link href={githubUrl} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> Código-fonte <ExternalLink aria-hidden="true" /></Link>
              <Link href={`${githubUrl}/issues`} target="_blank" rel="noreferrer">Issues <ExternalLink aria-hidden="true" /></Link>
              <Link href={`${githubUrl}/releases`} target="_blank" rel="noreferrer">Releases <ExternalLink aria-hidden="true" /></Link>
            </div>
          </section>

          <footer className="paper-footer">
            <p>Extenso.js · MIT</p>
            <Link href="#inicio">Voltar ao início ↑</Link>
          </footer>
        </article>
      </main>
    </>
  )
}
