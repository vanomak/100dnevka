import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { auth, firebase } from '../lib/firebase/index'

const handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
    auth.signInWithPopup(provider)
        .then(() => {
            alert('You are signed In');
        })
        .catch(err => {
            alert('OOps something went wrong check your console');
            console.log(err);
        });
}

const handleLogout = () => {
    auth.signOut().then(function() {
        alert('Logout successful');
    }).catch(function(error) {
        alert('OOps something went wrong check your console');
        console.log(error);
    });
}

export default function Home({ allPostsData }) {
  return (
    <Layout home={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
          <button onClick={handleSignIn}>Войти через Google</button>
          <button onClick={handleLogout}>Выйти</button>
      </section>
      {/*<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>*/}
      {/*  <h2 className={utilStyles.headingLg}>Blog</h2>*/}
      {/*  <ul className={utilStyles.list}>*/}
      {/*    {allPostsData.map(({ id, date, title }) => (*/}
      {/*      <li className={utilStyles.listItem} key={id}>*/}
      {/*        <Link href={`/posts/${id}`}>*/}
      {/*          <a>{title}</a>*/}
      {/*        </Link>*/}
      {/*        <br />*/}
      {/*        <small className={utilStyles.lightText}>*/}
      {/*          <Date dateString={date} />*/}
      {/*        </small>*/}
      {/*      </li>*/}
      {/*    ))}*/}
      {/*  </ul>*/}
      {/*</section>*/}
    </Layout>
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }
