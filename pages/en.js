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
    * {
      box-sizing: border-box;
    }

    .notion-blank { display: none; }

    body {
      margin: 0 1rem;
      background: fixed linear-gradient(0deg, #D7F5EF, #9480FF);
      font-family: system, -apple-system, ".SFNSText-Regular", "San Francisco", "Roboto", "Segoe UI", "Helvetica Neue", "Lucida Grande", sans-serif;
    }
    
    a, a:link, a:visited {
      text-decoration: none;
      color: #694DFF;
    }

      .wrapper {
        max-width: 480px;
        margin: 0 auto;
      }

      .logo {
        text-align: center;
      }

      .logo img {
        max-width: 12rem;
        margin: 4rem auto 1rem;
      }
      
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
        color: #FF7698;
      }

      /* site e  newsletter */
      .notion-callout {
        display: flex;
        padding: 1rem;
        background: #fff;
        border: 1px solid black;
        box-shadow: 4px 4px black;
        margin-bottom: 1rem;
      }

      .notion-callout .notion-page-icon {
        margin-right: .5rem;
      }

      .notion-callout a:nth-child(n+2) {
        color: black;
      }


      .notion-block-ce69738b24154e2bb08279a1771905e8 {
        align-items: center;
      }

      .notion-block-ce69738b24154e2bb08279a1771905e8 .notion-page-icon {
        margin-right: 2rem;
      }

      .notion-block-ce69738b24154e2bb08279a1771905e8 img {
        max-width: 100px;
      }
      
      /* links */
      .notion-block-2f8c236232cd419f97bbf7560cb7b551 {
        display: flex;
        justify-content: space-between;
        margin: 2rem;
        font-weight: bold;
      }

      footer {
        text-align: center;
        font-size: .75rem;
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