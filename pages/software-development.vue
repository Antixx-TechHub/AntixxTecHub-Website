<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Software Development" pageDesc="Lorem Ipsum" />
        <About />
        <MoreToDiscover />
        <ServicesOne />
        <PageFeature />
        <WhyChooseUs />
        <PageAbout />
        <!-- <Faq /> -->
        <!-- <Pricing /> -->
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/software-development/PageTitle';
import AmazingFeatures from '../components/software-development/AmazingFeatures';
import ServicesOne from '../components/software-development/ServicesOne'
import MoreToDiscover from '../components/software-development/MoreToDiscover';
import Services from '../components/software-development/Services';
import YourApplication from '../components/software-development/YourApplication';
import TheAbilityToElicit from '../components/software-development/TheAbilityToElicit';
import TheBestInnovative from '../components/software-development/TheBestInnovative';
import WhyChooseUs from '../components/software-development/WhyChooseUs';
import Features from '../components/software-development/Features';
import ConnectionsYourCustomers from '../components/software-development/ConnectionsYourCustomers';
import About from '../components/software-development/About';
import PageAbout from '../components/software-development/PageAbout';
import CaseStudies from '../components/software-development/CaseStudies';
import Featured from '../components/software-development/Featured';
import PageFeature from '../components/software-development/PageFeature';
import Expertise from '../components/software-development/Expertise';
import Faq from '../components/software-development/Faq';
import Pricing from '../components/software-development/Pricing';
import BestSupport from '../components/software-development/BestSupport';
import FreeTrial from '../components/software-development/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AmazingFeatures,
        ServicesOne,
        Services,
        MoreToDiscover,
        YourApplication,
        TheAbilityToElicit,
        WhyChooseUs,
        Features,
        ConnectionsYourCustomers,
        TheBestInnovative,
        About,
        PageAbout,
        PageFeature,
        CaseStudies,
        Featured,
        Expertise,
        Faq,
        Pricing,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
