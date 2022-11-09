<template>
    <div>
        <TopBar />
        <Navbar />
        <div class="seo-marketing-home-with-full-background">
            <MainBanner />
            <Features />
            <About />
            <WhatWeDo />
            <WhyChooseUs />
            <Funfacts />
            <OurExpertise />
            <CheckWebsites />
            <Services />
            <Faq />
            <!-- <Pricing />
            <Subscribe /> -->
            <UIDesign />
            <DigitalMarketing />
            <WeWork />
            <Overview />
            <Analysis />
            <Videos />
            <Partner />
            <Testimonials />
        </div>
        <OurLatestBlog />
        <FooterStyleOne />
    </div>
</template>

<script>
import TopBar from '../layouts/TopBar'
import Navbar from '../layouts/Navbar';
import MainBanner from '../components/home/MainBanner';
import Features from '../components/home/Features';
import About from '../components/home/About';
import WhatWeDo from '../components/home/WhatWeDo';
import WhyChooseUs from '../components/home/WhyChooseUs'
import CheckWebsites from '../components/home/CheckWebsites';
import Services from '../components/home/Services';
import WeWork from '../components/home/WeWork';
import Faq from '../components/home/Faq';
// import Pricing from '../components/home/Pricing';
// // import Subscribe from '../components/home/Subscribe'
import UIDesign from '../components/home/UIDesign';
import DigitalMarketing from '../components/home/DigitalMarketing';
import Overview from '../components/home/Overview';
import Funfacts from '../components/home/Funfacts';
import OurExpertise from '../components/home/OurExpertise';
import Analysis from '../components/home/Analysis';
import Videos from '../components/home/Videos';
import Partner from '../components/home/Partner'
import Testimonials from '../components/home/Testimonials';
import OurLatestBlog from '../components/home/OurLatestBlog';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        About,
        WhatWeDo,
        WhyChooseUs,
        // CheckWebsites,
        Services,
        WeWork,
        // Faq,
        // Partner,
        // Pricing,
        // // Subscribe,
        UIDesign,
        DigitalMarketing,
        Overview,
        Funfacts,
        OurExpertise,
        Analysis,
        Videos,
        Partner,
        Testimonials,
        OurLatestBlog,
        FooterStyleOne,
    }
};
</script>
