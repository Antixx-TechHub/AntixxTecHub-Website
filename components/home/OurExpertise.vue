<template>
    <div class="is-services-area ptb-100">
        <div class="container-fluid">
            <div class="section-title-with-large-box">
                <span>Introduce</span>
                <h2>Our Product Expertise</h2>
            </div>

            <div class="is-services-slides">
                <carousel
                    :autoplay = 'true'
                    :autoplayTimeout = '5000'
                    :loop = 'true'
                    :paginationEnabled = 'true'
                    :perPageCustom = "[[0, 1], [768, 2], [992, 3], [1200, 4]]"
                >
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/">BMC</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/bmc">
                                    <img src="~/assets/img/marketing-experts/services/services1.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Integration of BMC products- BMC TrueSight management; BMC Smart Reporting; BMC Helix Discovery; BMC Helix ITSM; BMC Control-M  Helix...</p>
                            <NuxtLink to="/" class="default-btn">Know More<span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/">Salesforce</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/">
                                    <img src="~/assets/img/marketing-experts/services/services2.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Customized integration of Sales Cloud; Service Cloud; Marketing Cloud; Integration Cloud; Commerce Cloud; Community Cloud...</p>
                            <NuxtLink to="/" class="default-btn">Know More<span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/">ServiceNow</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/">
                                    <img src="~/assets/img/marketing-experts/services/services3.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Expertise in configuration & integration of ServiceNow ITSM; workflows; Employee Service Management; Knowledge Management; Compliance...</p>
                            <NuxtLink to="/" class="default-btn">Know More<span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/">SAP</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/">
                                    <img src="~/assets/img/marketing-experts/services/services4.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Consultancy & integration for HANA; SAP ERP; CRM; SAP Business Objects; SAP Product Lifecycle; SAP HCM; SAP Commerce Cloud...</p>
                            <NuxtLink to="/" class="default-btn">Know More<span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/">AWS</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/">
                                    <img src="~/assets/img/marketing-experts/services/services1.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/" class="default-btn">Know More<span></span></NuxtLink>
                        </div>
                    </slide>
                    <slide>
                        <div class="is-services-card">
                            <h3>
                                <NuxtLink to="/">Analytics</NuxtLink>
                            </h3>
                            <div class="is-services-image">
                                <NuxtLink to="/">
                                    <img src="~/assets/img/marketing-experts/services/services2.jpg" alt="image">
                                </NuxtLink>
                            </div>
                            <p>Pellentesque in ipsum id orci porta dapibus nulla quis ut libero malesuada feugiat donec sollicitudin molestie malesuada.</p>
                            <NuxtLink to="/" class="default-btn">Know More <span></span></NuxtLink>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>

        <div class="me-services-shape1">
            <img src="~/~/assets/img/marketing-experts/services/services-shape1.png" alt="image">
        </div>
        <div class="me-services-shape2">
            <img src="~/~/assets/img/marketing-experts/services/services-shape2.png" alt="image">
        </div>
        <div class="me-services-shape3">
            <img src="~/~/assets/img/marketing-experts/services/services-shape3.png" alt="image">
        </div>
    </div>
</template>

<script>

export default{
    name: 'Services',
}
</script>