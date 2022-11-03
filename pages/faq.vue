<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Frequently Asked Questions" 
            pageDesc="Get to know about Striki" 
        />
        <Faq />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Faq from '../components/Common/Faq'
import BestSupport from '../components/Common/BestSupport'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>