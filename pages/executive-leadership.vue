<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Executive Leadership" 
            pageDesc="Meet Our experts always ready to help you" 
        />
        <Team />
        <OurLovingClients />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/executive-leadership/PageTitle';
import Team from '../components/executive-leadership/Team'
import OurLovingClients from '../components/executive-leadership/OurLovingClients'
import BestSupport from '../components/executive-leadership/BestSupport'
import FreeTrial from '../components/executive-leadership/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Team,
        OurLovingClients,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>