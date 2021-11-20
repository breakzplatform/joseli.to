import { NotionAPI } from 'notion-client'
import { NotionRenderer } from 'react-notion-x'

const notion = new NotionAPI()

const Site = ({ recordMap }) => (
  <>
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
      /* code block */
      .notion-block-2a985d0d3aeb4f66aa20389f8d4f7546 {
        margin: 1rem auto;
        text-align: center;
        background: #fff;
        border: 1px solid black;
        box-shadow: 4px 4px black;
        padding: 1rem;
      }

      .notion-block-2a985d0d3aeb4f66aa20389f8d4f7546 code {
        font-size: 1.5rem;
        font-family: 'Iosevka', monospace;
        color: #CA3050;
      }

      .notion-block-ce69738b24154e2bb08279a1771905e8 {
        align-items: center;
      }

      .notion-block-ce69738b24154e2bb08279a1771905e8 .notion-page-icon {
        margin-right: 2rem;
        width: 100px;
        height: 106.5px;
      }

      /* links */
      .notion-block-2f8c236232cd419f97bbf7560cb7b551 {
        display: flex;
        justify-content: space-between;
        margin: 2rem;
        font-weight: bold;
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