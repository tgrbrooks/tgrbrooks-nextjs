import Head from 'next/head'
import Link from 'next/link'
import { siteTitle, name } from '../components/layout'
import PageLayout from '../components/pageLayout'
import utilStyles from '../styles/utils.module.scss'
import styles from '../styles/layout.module.scss'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

import React, { useState } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home ({ allPostsData }) {
  return (
    <PageLayout home title="Hello!" type={1}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className={styles.header}>
          <>
            <img
              src="/images/profile.jpg"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
      </header>
      <section className={utilStyles.headingMd}>
        <p>Welcome to my website!</p>
        <p>
          This is mostly just a space for me to try to keep all of my thoughts in one place.
          It's also where I experiment with new Javascript libraries and tools, so there's a good chance some parts of the site might be broken.
        </p>
      </section>
      <Jumbotron>
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Jumbotron>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>          
          ))}
        </ul>
      </section>
    </PageLayout>
  )
}