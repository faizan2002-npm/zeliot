
import { Home } from './../Views/Public/Home';
// import { Contact } from './../Views/Public/Contact';
import { Solutions } from './../Views/Public/Solutions';
import { Product } from './../Views/Public/Product';
import { Accessories } from './../Views/Public/Accessories';
// import { OEM } from './../Views/Public/OEM';
import { SolutionEVS } from './../Views/Public/SolutionEVS';
import { SolutionFMS } from './../Views/Public/SolutionFMS';
import UseDocumentTitle from './../UseDocumentTitle';
import SiteSettings from "./../Constants/SiteSettings";
const _Home = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Home`)
    return <Home />
}
// const _Contact = () => {
//     UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Contact`)
//     return <Contact />
// }
const _Solutions = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Solutions`)
    return <Solutions />
}
const _Product = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Product`)
    return <Product />
}
const _Accessories = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Accessories`)
    return <Accessories />
}
const _Support = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Accessories`)
    return <Home />
}
const _Pricing = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Accessories`)
    return <Home />
}
const _SolutionEVS = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Solutions EVS`)
    return <SolutionEVS />
}
const _SolutionFMS = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Solutions FMS`)
    return <SolutionFMS />
}
var routes = [
    //Public Routes
    {
        path: "/",
        name: "Company",
        component: _Home,
        layout: "",
    },
    {
        path: "/Product",
        name: "Product",
        component: _Product,
        layout: "",
    },
    {
        path: "/Solutions",
        name: "Solutions",
        component: _Solutions,
        layout: "",
    },
    {
        path: "/Accessories",
        name: "Industries",
        component: _Accessories,
        layout: "",
    },
    {
        path: "/Support",
        name: "Support",
        component: _Support,
        layout: "",
    },
    {
        path: "/Pricing",
        name: "Pricing",
        component: _Pricing,
        layout: "",
    },
    // {
    //     path: "/OEM",
    //     name: "OEM",
    //     component: _OEM,
    //     layout: "",
    // },
    {
        path: "/SolutionEVS",
        name: "SolutionEVS",
        component: _SolutionEVS,
        layout: "",
        show:"no"
    },
    {
        path: "/SolutionFMS",
        name: "SolutionFMS",
        component: _SolutionFMS,
        layout: "",
        show:"no"
    },
    //Solutions
]
export default routes;
