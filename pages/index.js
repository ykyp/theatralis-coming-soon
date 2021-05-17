import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedEventsData } from '../lib/events'
import Link from 'next/link'
import FormattedDate from '../components/date'
import { Filter } from '../components/filter';
import { ListingEvent } from '../components/listing-event';
import { useState, useEffect } from 'react';
import { Paginator } from 'primereact/paginator';
import * as ga from '../lib/ga'

export default function Home() {
   return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.textAlignCenter}`}>
        <h2>Coming soon!</h2>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allEventsData = getSortedEventsData();
  return {
    props: {
      allEventsData: allEventsData,
    }
  }
}
