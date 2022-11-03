<template>
    <div>
        <TopBar />
        <NavbarStyleThree />
        <MainBanner />
        <Partner />
        <Features />
        <WhatWeDo />
        <Funfacts />
        <Services />
        <WhyChooseUs />
        <Subscribe />
        <Team />
        <Pricing />
        <Testimonials />
        <Blog />
        <FooterStyleTwo />
    </div>
</template>

<script>
import TopBar from '../layouts/TopBar'
import NavbarStyleThree from '../layouts/NavbarStyleThree'
import MainBanner from '../components/home-eleven/MainBanner'
import Partner from '../components/home-eleven/Partner'
import Features from '../components/home-eleven/Features'
import WhatWeDo from '../components/home-eleven/WhatWeDo'
import Funfacts from '../components/home-eleven/Funfacts'
import Services from '../components/home-eleven/Services'
import WhyChooseUs from '../components/home-eleven/WhyChooseUs'
import Subscribe from '../components/home-eleven/Subscribe'
import Team from '../components/home-eleven/Team'
import Pricing from '../components/home-eleven/Pricing'
import Testimonials from '../components/home-eleven/Testimonials'
import Blog from '../components/Common/Blog'
import FooterStyleTwo from '../layouts/FooterStyleTwo'

export default {
    components: {
        TopBar,
        NavbarStyleThree,
        MainBanner,
        Partner,
        Features,
        WhatWeDo,
        Funfacts,
        Services,
        WhyChooseUs,
        Subscribe,
        Team,
        Pricing,
        Testimonials,
        Blog,
        FooterStyleTwo,
    }
};
</script>
