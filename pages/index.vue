<template>
    <div>
        <TopBar />
        <Navbar />
        <div class="seo-marketing-home-with-full-background">
            <MainBanner />
            <Features />
            <Welcome />
            <About />
            <WhatWeDo />
            <WhyChooseUs />
            <Funfacts />
            <OurExpertise />
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
import Welcome from '../components/home/Welcome';
import About from '../components/home/About';
import WhatWeDo from '../components/home/WhatWeDo';
import WhyChooseUs from '../components/home/WhyChooseUs';
import WeWork from '../components/home/WeWork';
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
        Welcome,
        About,
        WhatWeDo,
        WhyChooseUs,
        WeWork,
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
