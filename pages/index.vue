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
import MainBanner from '../components/Index/MainBanner';
import Features from '../components/Index/Features';
import Welcome from '../components/Index/Welcome';
import About from '../components/Index/About';
import WhatWeDo from '../components/Index/WhatWeDo';
import WhyChooseUs from '../components/Index/WhyChooseUs';
import WeWork from '../components/Index/WeWork';
import Funfacts from '../components/Index/Funfacts';
import OurExpertise from '../components/Index/OurExpertise';
import Analysis from '../components/Index/Analysis';
import Videos from '../components/Index/Videos';
import Partner from '../components/Index/Partner'
import Testimonials from '../components/Index/Testimonials';
import OurLatestBlog from '../components/Index/OurLatestBlog';
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
