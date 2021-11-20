import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import Head from 'next/head'

const notion = new NotionAPI()

const Site = ({ recordMap }) => (
  <>
    <Head>
      <html lang="pt-BR" />
    </Head>
    <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={true} />
    <footer>
      CC-BY-SA 2010-{(new Date()).getUTCFullYear()} Joselito &middot; Feito com <a href="https://joselito.notion.site/joseli-to-pt-fbaa0d2115194e4982903025f75e2342" target="_blank" rel="noopener noreferrer">Notion</a> e <a href="https://github.com/breakzplatform/hello" target="_blank" rel="noopener noreferrer">Next.js</a>
    </footer>
    <style global jsx>{`
      /* code */
      .notion-block-d4cfb10efc804a91868b55d310c67a22 {
        margin: 1rem auto;
        text-align: center;
        background: #fff;
        border: 1px solid black;
        box-shadow: 4px 4px black;
        padding: 1rem;
      }

      .notion-block-d4cfb10efc804a91868b55d310c67a22 code {
        font-size: 1.5rem;
        font-family: 'Iosevka', monospace;
        color: #CA3050;
      }

      /* description */
      .notion-block-5aacc68e66414824b27d90e8b37ecd97 {
        align-items: center;
      }

      .notion-block-5aacc68e66414824b27d90e8b37ecd97 .notion-page-icon {
        margin-right: 2rem;
        width: 100px;
        height: 106.5px;
      }

      /* links */
      .notion-block-aaf7fcee399f4b578fb16aaf46528db4 {
        display: flex;
        justify-content: space-between;
        margin: 2rem;
        font-weight: bold;
      }
    `}</style>
  </>
)

export const getStaticProps = async () => {
  const recordMap = await notion.getPage('fbaa0d2115194e4982903025f75e2342')

  return {
    props: {
      recordMap,
    },
  }
}
export default Site