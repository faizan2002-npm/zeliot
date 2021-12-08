
import { Home } from './../Views/Public/Home';
import { Solutions } from './../Views/Public/Solutions';
import { Product } from './../Views/Public/Product';
import { Accessories } from './../Views/Public/Accessories';
import { SolutionEVS } from './../Views/Public/SolutionEVS';
import { SolutionFMS } from './../Views/Public/SolutionFMS';
import UseDocumentTitle from './../UseDocumentTitle';
import SiteSettings from "./../Constants/SiteSettings";
import { AquilaTrack } from './../Views/Public/AquilaTrack';
import { AquilaSchool } from './../Views/Public/AquilaSchool';
import { AquilaOEM } from './../Views/Public/AquilaOEM';
const _Home = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Home`)
    return <Home />
}
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
const _AquilaTrack = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | AquilaTrack | Telematics Tracking`)
    return <AquilaTrack />
}
const _AquilaSchool = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | School | School Transportation Management`)
    return <AquilaSchool />
}
const _AquilaOEM = () => {
    UseDocumentTitle(`${SiteSettings.SiteSettings[0].SITE_TITLE} | Automotive OEM & Enterprise solutions`)
    return <AquilaOEM />
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
        path: "/AquilaTrack",
        name: "AquilaTrack",
        component: _AquilaTrack,
        layout: "",
    },
    {
        path: "/AquilaSchool",
        name: "AquilaSchool",
        component: _AquilaSchool,
        layout: "",
    },
    {
        path: "/AquilaOEM",
        name: "AquilaOEM",
        component: _AquilaOEM,
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
