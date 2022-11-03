<template>
    <div>
        <TopBar />
        <Navbar />
        <div class="seo-marketing-home-with-full-background">
            <MainBanner />
            <Features />
            <About />
            <CheckWebsites />
            <Services />
            <Funfacts />
            <WeWork />
            <Faq />
            <Partner />
            <Overview />
            <Pricing />
            <Subscribe />
        </div>
        <Blog />
        <FooterStyleOne />
    </div>
</template>

<script>
import TopBar from '../layouts/TopBar'
import Navbar from '../layouts/Navbar';
import MainBanner from '../components/home/MainBanner';
import Features from '../components/home/Features';
import About from '../components/home/About';
import CheckWebsites from '../components/home/CheckWebsites';
import Services from '../components/home/Services';
import Funfacts from '../components/home/Funfacts';
import WeWork from '../components/home/WeWork';
import Faq from '../components/home/Faq';
import Partner from '../components/home/Partner'
import Overview from '../components/home/Overview';
import Pricing from '../components/home/Pricing';
import Subscribe from '../components/home/Subscribe'
import Blog from '../components/Common/Blog'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        Navbar,
        MainBanner,
        Features,
        About,
        CheckWebsites,
        Services,
        Funfacts,
        WeWork,
        Faq,
        Partner,
        Overview,
        Pricing,
        Subscribe,
        Blog,
        FooterStyleOne,
    }
};
</script>
