<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About" pageDesc="The Striki Story" />
        <TakeYourBusiness />
        <Partner />
        <WhyChooseUs />
        <ReadyToHelpYou class="pt-0" />
        <DownloadApp />
        <WhatsOurClients />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import TakeYourBusiness from '../components/About/TakeYourBusiness'
import Partner from '../components/Common/Partner'
import WhyChooseUs from '../components/Common/WhyChooseUs'
import ReadyToHelpYou from '../components/Common/ReadyToHelpYou'
import DownloadApp from '../components/Common/DownloadApp'
import WhatsOurClients from '../components/Common/WhatsOurClients'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        TakeYourBusiness,
        Partner,
        WhyChooseUs,
        ReadyToHelpYou,
        DownloadApp,
        WhatsOurClients,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
