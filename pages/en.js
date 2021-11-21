import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'
import Head from 'next/head'

import { notionCodeBlockDivStyles, notionCodeBlockCodeStyles, notionDescriptionStyles, notionPageIconStyles, notionLinksBlockStyles } from '../styles/shared.js';

const notion = new NotionAPI()

const Site = ({ recordMap }) => (
  <>
    <Head>
      <html lang="en-US" />
    </Head>
    <NotionRenderer recordMap={recordMap} fullPage={false} darkMode={true} />
    <footer>
      CC-BY-SA 2010-{(new Date()).getUTCFullYear()} Joselito &middot; Powered by <a
        href="https://joselito.notion.site/joseli-to-en-4db6addcb23041839bef5983fcb1f134"
        target="_blank"
        rel="noopener noreferrer"
      >Notion</a> and <a
        href="https://github.com/breakzplatform/hello"
        target="_blank"
        rel="noopener noreferrer"
      >Next.js</a>
    </footer>
    <style global jsx>{`
      // npm card
      .notion-text.notion-block-2a985d0d3aeb4f66aa20389f8d4f7546 {
        ${notionCodeBlockDivStyles}
      }

      .notion-text.notion-block-2a985d0d3aeb4f66aa20389f8d4f7546 code {
        ${notionCodeBlockCodeStyles}
      }

      // description
      .notion-callout.notion-block-ce69738b24154e2bb08279a1771905e8 {
        ${notionDescriptionStyles}
      }

      .notion-callout.notion-block-ce69738b24154e2bb08279a1771905e8 .notion-page-icon {
        ${notionPageIconStyles}
      }

      // links
      .notion-block-2f8c236232cd419f97bbf7560cb7b551 {
        ${notionLinksBlockStyles}
      }
    `}</style>
  </>
)

export const getStaticProps = async () => {
  const recordMap = await notion.getPage('4db6addcb23041839bef5983fcb1f134')

  return {
    props: {
      recordMap,
    },
  }
}
export default Site