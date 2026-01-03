import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { createHandler } from './helpers';

export const operations: Record<string, Record<string, (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[]>>> = {
  "auth": {
    "/auth/login": createHandler({
      operationId: "/auth/login",
      method: "POST",
      path: "/auth/login",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/auth/logout": createHandler({
      operationId: "/auth/logout",
      method: "POST",
      path: "/auth/logout",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/auth/me": createHandler({
      operationId: "/auth/me",
      method: "GET",
      path: "/auth/me",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/auth/passwordRecover": createHandler({
      operationId: "/auth/passwordRecover",
      method: "POST",
      path: "/auth/passwordRecover",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/auth/passwordReset": createHandler({
      operationId: "/auth/passwordReset",
      method: "POST",
      path: "/auth/passwordReset",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/auth/refresh": createHandler({
      operationId: "/auth/refresh",
      method: "POST",
      path: "/auth/refresh",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/auth/register": createHandler({
      operationId: "/auth/register",
      method: "POST",
      path: "/auth/register",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    })
  },  "catalog": {
    "/catalog/categoryCreate": createHandler({
      operationId: "/catalog/categoryCreate",
      method: "POST",
      path: "/catalog/category",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/categoryRead": createHandler({
      operationId: "/catalog/categoryRead",
      method: "GET",
      path: "/catalog/category",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/categoryUpdate": createHandler({
      operationId: "/catalog/categoryUpdate",
      method: "PUT",
      path: "/catalog/category",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/categoryDelete": createHandler({
      operationId: "/catalog/categoryDelete",
      method: "DELETE",
      path: "/catalog/category/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/categoryReadById": createHandler({
      operationId: "/catalog/categoryReadById",
      method: "GET",
      path: "/catalog/category/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "catalog/company": {
    "/catalog/company/companyCreate": createHandler({
      operationId: "/catalog/company/companyCreate",
      method: "POST",
      path: "/catalog/company/company",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/companyRead": createHandler({
      operationId: "/catalog/company/companyRead",
      method: "GET",
      path: "/catalog/company/company",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/companyUpdate": createHandler({
      operationId: "/catalog/company/companyUpdate",
      method: "PUT",
      path: "/catalog/company/company",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/companyDelete": createHandler({
      operationId: "/catalog/company/companyDelete",
      method: "DELETE",
      path: "/catalog/company/company/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/companyReadById": createHandler({
      operationId: "/catalog/company/companyReadById",
      method: "GET",
      path: "/catalog/company/company/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/companyOpGetActive": createHandler({
      operationId: "/catalog/company/companyOpGetActive",
      method: "POST",
      path: "/catalog/company/companyOpGetActive",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/companyOpSetActive": createHandler({
      operationId: "/catalog/company/companyOpSetActive",
      method: "POST",
      path: "/catalog/company/companyOpSetActive/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/societyCreate": createHandler({
      operationId: "/catalog/company/societyCreate",
      method: "POST",
      path: "/catalog/company/society",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/societyRead": createHandler({
      operationId: "/catalog/company/societyRead",
      method: "GET",
      path: "/catalog/company/society",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/societyUpdate": createHandler({
      operationId: "/catalog/company/societyUpdate",
      method: "PUT",
      path: "/catalog/company/society",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/societyDelete": createHandler({
      operationId: "/catalog/company/societyDelete",
      method: "DELETE",
      path: "/catalog/company/society/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/company/societyReadById": createHandler({
      operationId: "/catalog/company/societyReadById",
      method: "GET",
      path: "/catalog/company/society/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "catalog/location": {
    "/catalog/location/cityCreate": createHandler({
      operationId: "/catalog/location/cityCreate",
      method: "POST",
      path: "/catalog/location/city",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/cityRead": createHandler({
      operationId: "/catalog/location/cityRead",
      method: "GET",
      path: "/catalog/location/city",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/cityUpdate": createHandler({
      operationId: "/catalog/location/cityUpdate",
      method: "PUT",
      path: "/catalog/location/city",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/cityDelete": createHandler({
      operationId: "/catalog/location/cityDelete",
      method: "DELETE",
      path: "/catalog/location/city/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/cityReadById": createHandler({
      operationId: "/catalog/location/cityReadById",
      method: "GET",
      path: "/catalog/location/city/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/cityOpFind": createHandler({
      operationId: "/catalog/location/cityOpFind",
      method: "POST",
      path: "/catalog/location/cityOpFind",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/countryCreate": createHandler({
      operationId: "/catalog/location/countryCreate",
      method: "POST",
      path: "/catalog/location/country",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/countryRead": createHandler({
      operationId: "/catalog/location/countryRead",
      method: "GET",
      path: "/catalog/location/country",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/countryUpdate": createHandler({
      operationId: "/catalog/location/countryUpdate",
      method: "PUT",
      path: "/catalog/location/country",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/countryDelete": createHandler({
      operationId: "/catalog/location/countryDelete",
      method: "DELETE",
      path: "/catalog/location/country/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/countryReadById": createHandler({
      operationId: "/catalog/location/countryReadById",
      method: "GET",
      path: "/catalog/location/country/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/geocodeRead": createHandler({
      operationId: "/catalog/location/geocodeRead",
      method: "GET",
      path: "/catalog/location/geocode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/stateCreate": createHandler({
      operationId: "/catalog/location/stateCreate",
      method: "POST",
      path: "/catalog/location/state",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/stateRead": createHandler({
      operationId: "/catalog/location/stateRead",
      method: "GET",
      path: "/catalog/location/state",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/stateUpdate": createHandler({
      operationId: "/catalog/location/stateUpdate",
      method: "PUT",
      path: "/catalog/location/state",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/stateDelete": createHandler({
      operationId: "/catalog/location/stateDelete",
      method: "DELETE",
      path: "/catalog/location/state/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/stateReadById": createHandler({
      operationId: "/catalog/location/stateReadById",
      method: "GET",
      path: "/catalog/location/state/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/location/zipcodeRead": createHandler({
      operationId: "/catalog/location/zipcodeRead",
      method: "GET",
      path: "/catalog/location/zipcode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "catalog/person": {
    "/catalog/person/personCreate": createHandler({
      operationId: "/catalog/person/personCreate",
      method: "POST",
      path: "/catalog/person/person",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personRead": createHandler({
      operationId: "/catalog/person/personRead",
      method: "GET",
      path: "/catalog/person/person",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personUpdate": createHandler({
      operationId: "/catalog/person/personUpdate",
      method: "PUT",
      path: "/catalog/person/person",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personDelete": createHandler({
      operationId: "/catalog/person/personDelete",
      method: "DELETE",
      path: "/catalog/person/person/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personReadById": createHandler({
      operationId: "/catalog/person/personReadById",
      method: "GET",
      path: "/catalog/person/person/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personAddressCreate": createHandler({
      operationId: "/catalog/person/personAddressCreate",
      method: "POST",
      path: "/catalog/person/personAddress",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personAddressRead": createHandler({
      operationId: "/catalog/person/personAddressRead",
      method: "GET",
      path: "/catalog/person/personAddress",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personAddressUpdate": createHandler({
      operationId: "/catalog/person/personAddressUpdate",
      method: "PUT",
      path: "/catalog/person/personAddress",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personAddressDelete": createHandler({
      operationId: "/catalog/person/personAddressDelete",
      method: "DELETE",
      path: "/catalog/person/personAddress/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personAddressReadById": createHandler({
      operationId: "/catalog/person/personAddressReadById",
      method: "GET",
      path: "/catalog/person/personAddress/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personAddressOpSetDefault": createHandler({
      operationId: "/catalog/person/personAddressOpSetDefault",
      method: "POST",
      path: "/catalog/person/personAddressOpSetDefault/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCommentCreate": createHandler({
      operationId: "/catalog/person/personCommentCreate",
      method: "POST",
      path: "/catalog/person/personComment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCommentRead": createHandler({
      operationId: "/catalog/person/personCommentRead",
      method: "GET",
      path: "/catalog/person/personComment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCommentUpdate": createHandler({
      operationId: "/catalog/person/personCommentUpdate",
      method: "PUT",
      path: "/catalog/person/personComment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCommentDelete": createHandler({
      operationId: "/catalog/person/personCommentDelete",
      method: "DELETE",
      path: "/catalog/person/personComment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCommentReadById": createHandler({
      operationId: "/catalog/person/personCommentReadById",
      method: "GET",
      path: "/catalog/person/personComment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCompactRead": createHandler({
      operationId: "/catalog/person/personCompactRead",
      method: "GET",
      path: "/catalog/person/personCompact",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personCompactReadById": createHandler({
      operationId: "/catalog/person/personCompactReadById",
      method: "GET",
      path: "/catalog/person/personCompact/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personContactCreate": createHandler({
      operationId: "/catalog/person/personContactCreate",
      method: "POST",
      path: "/catalog/person/personContact",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personContactRead": createHandler({
      operationId: "/catalog/person/personContactRead",
      method: "GET",
      path: "/catalog/person/personContact",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personContactUpdate": createHandler({
      operationId: "/catalog/person/personContactUpdate",
      method: "PUT",
      path: "/catalog/person/personContact",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personContactDelete": createHandler({
      operationId: "/catalog/person/personContactDelete",
      method: "DELETE",
      path: "/catalog/person/personContact/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personContactReadById": createHandler({
      operationId: "/catalog/person/personContactReadById",
      method: "GET",
      path: "/catalog/person/personContact/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personDocumentCreate": createHandler({
      operationId: "/catalog/person/personDocumentCreate",
      method: "POST",
      path: "/catalog/person/personDocument",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personDocumentRead": createHandler({
      operationId: "/catalog/person/personDocumentRead",
      method: "GET",
      path: "/catalog/person/personDocument",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personDocumentUpdate": createHandler({
      operationId: "/catalog/person/personDocumentUpdate",
      method: "PUT",
      path: "/catalog/person/personDocument",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personDocumentDelete": createHandler({
      operationId: "/catalog/person/personDocumentDelete",
      method: "DELETE",
      path: "/catalog/person/personDocument/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personDocumentReadById": createHandler({
      operationId: "/catalog/person/personDocumentReadById",
      method: "GET",
      path: "/catalog/person/personDocument/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personGroupCreate": createHandler({
      operationId: "/catalog/person/personGroupCreate",
      method: "POST",
      path: "/catalog/person/personGroup",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personGroupRead": createHandler({
      operationId: "/catalog/person/personGroupRead",
      method: "GET",
      path: "/catalog/person/personGroup",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personGroupUpdate": createHandler({
      operationId: "/catalog/person/personGroupUpdate",
      method: "PUT",
      path: "/catalog/person/personGroup",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personGroupDelete": createHandler({
      operationId: "/catalog/person/personGroupDelete",
      method: "DELETE",
      path: "/catalog/person/personGroup/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personGroupReadById": createHandler({
      operationId: "/catalog/person/personGroupReadById",
      method: "GET",
      path: "/catalog/person/personGroup/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/person/personOpReadFromPersonDirectory": createHandler({
      operationId: "/catalog/person/personOpReadFromPersonDirectory",
      method: "POST",
      path: "/catalog/person/personOpReadFromPersonDirectory",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "catalog/product": {
    "/catalog/product/codeConversionCreate": createHandler({
      operationId: "/catalog/product/codeConversionCreate",
      method: "POST",
      path: "/catalog/product/codeConversion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionRead": createHandler({
      operationId: "/catalog/product/codeConversionRead",
      method: "GET",
      path: "/catalog/product/codeConversion",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionUpdate": createHandler({
      operationId: "/catalog/product/codeConversionUpdate",
      method: "PUT",
      path: "/catalog/product/codeConversion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionDelete": createHandler({
      operationId: "/catalog/product/codeConversionDelete",
      method: "DELETE",
      path: "/catalog/product/codeConversion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionReadById": createHandler({
      operationId: "/catalog/product/codeConversionReadById",
      method: "GET",
      path: "/catalog/product/codeConversion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionListCreate": createHandler({
      operationId: "/catalog/product/codeConversionListCreate",
      method: "POST",
      path: "/catalog/product/codeConversionList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionListRead": createHandler({
      operationId: "/catalog/product/codeConversionListRead",
      method: "GET",
      path: "/catalog/product/codeConversionList",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionListUpdate": createHandler({
      operationId: "/catalog/product/codeConversionListUpdate",
      method: "PUT",
      path: "/catalog/product/codeConversionList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionListDelete": createHandler({
      operationId: "/catalog/product/codeConversionListDelete",
      method: "DELETE",
      path: "/catalog/product/codeConversionList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/codeConversionListReadById": createHandler({
      operationId: "/catalog/product/codeConversionListReadById",
      method: "GET",
      path: "/catalog/product/codeConversionList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/dimensionCreate": createHandler({
      operationId: "/catalog/product/dimensionCreate",
      method: "POST",
      path: "/catalog/product/dimension",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/dimensionRead": createHandler({
      operationId: "/catalog/product/dimensionRead",
      method: "GET",
      path: "/catalog/product/dimension",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/dimensionUpdate": createHandler({
      operationId: "/catalog/product/dimensionUpdate",
      method: "PUT",
      path: "/catalog/product/dimension",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/dimensionDelete": createHandler({
      operationId: "/catalog/product/dimensionDelete",
      method: "DELETE",
      path: "/catalog/product/dimension/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/dimensionReadById": createHandler({
      operationId: "/catalog/product/dimensionReadById",
      method: "GET",
      path: "/catalog/product/dimension/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productCreate": createHandler({
      operationId: "/catalog/product/productCreate",
      method: "POST",
      path: "/catalog/product/product",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productRead": createHandler({
      operationId: "/catalog/product/productRead",
      method: "GET",
      path: "/catalog/product/product",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productUpdate": createHandler({
      operationId: "/catalog/product/productUpdate",
      method: "PUT",
      path: "/catalog/product/product",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productDelete": createHandler({
      operationId: "/catalog/product/productDelete",
      method: "DELETE",
      path: "/catalog/product/product/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productReadById": createHandler({
      operationId: "/catalog/product/productReadById",
      method: "GET",
      path: "/catalog/product/product/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productKitComponentCreate": createHandler({
      operationId: "/catalog/product/productKitComponentCreate",
      method: "POST",
      path: "/catalog/product/productKitComponent",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productKitComponentRead": createHandler({
      operationId: "/catalog/product/productKitComponentRead",
      method: "GET",
      path: "/catalog/product/productKitComponent",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productKitComponentUpdate": createHandler({
      operationId: "/catalog/product/productKitComponentUpdate",
      method: "PUT",
      path: "/catalog/product/productKitComponent",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productKitComponentDelete": createHandler({
      operationId: "/catalog/product/productKitComponentDelete",
      method: "DELETE",
      path: "/catalog/product/productKitComponent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productKitComponentReadById": createHandler({
      operationId: "/catalog/product/productKitComponentReadById",
      method: "GET",
      path: "/catalog/product/productKitComponent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productOpClone": createHandler({
      operationId: "/catalog/product/productOpClone",
      method: "POST",
      path: "/catalog/product/productOpClone/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productOpConvertToUnit": createHandler({
      operationId: "/catalog/product/productOpConvertToUnit",
      method: "POST",
      path: "/catalog/product/productOpConvertToUnit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productPackingCreate": createHandler({
      operationId: "/catalog/product/productPackingCreate",
      method: "POST",
      path: "/catalog/product/productPacking",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productPackingRead": createHandler({
      operationId: "/catalog/product/productPackingRead",
      method: "GET",
      path: "/catalog/product/productPacking",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productPackingUpdate": createHandler({
      operationId: "/catalog/product/productPackingUpdate",
      method: "PUT",
      path: "/catalog/product/productPacking",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productPackingDelete": createHandler({
      operationId: "/catalog/product/productPackingDelete",
      method: "DELETE",
      path: "/catalog/product/productPacking/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productPackingReadById": createHandler({
      operationId: "/catalog/product/productPackingReadById",
      method: "GET",
      path: "/catalog/product/productPacking/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productPackingOpConvertToUnit": createHandler({
      operationId: "/catalog/product/productPackingOpConvertToUnit",
      method: "POST",
      path: "/catalog/product/productPackingOpConvertToUnit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productProfileCreate": createHandler({
      operationId: "/catalog/product/productProfileCreate",
      method: "POST",
      path: "/catalog/product/productProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productProfileRead": createHandler({
      operationId: "/catalog/product/productProfileRead",
      method: "GET",
      path: "/catalog/product/productProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productProfileUpdate": createHandler({
      operationId: "/catalog/product/productProfileUpdate",
      method: "PUT",
      path: "/catalog/product/productProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productProfileDelete": createHandler({
      operationId: "/catalog/product/productProfileDelete",
      method: "DELETE",
      path: "/catalog/product/productProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productProfileReadById": createHandler({
      operationId: "/catalog/product/productProfileReadById",
      method: "GET",
      path: "/catalog/product/productProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productUnitConversionCreate": createHandler({
      operationId: "/catalog/product/productUnitConversionCreate",
      method: "POST",
      path: "/catalog/product/productUnitConversion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productUnitConversionRead": createHandler({
      operationId: "/catalog/product/productUnitConversionRead",
      method: "GET",
      path: "/catalog/product/productUnitConversion",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productUnitConversionUpdate": createHandler({
      operationId: "/catalog/product/productUnitConversionUpdate",
      method: "PUT",
      path: "/catalog/product/productUnitConversion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productUnitConversionDelete": createHandler({
      operationId: "/catalog/product/productUnitConversionDelete",
      method: "DELETE",
      path: "/catalog/product/productUnitConversion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productUnitConversionReadById": createHandler({
      operationId: "/catalog/product/productUnitConversionReadById",
      method: "GET",
      path: "/catalog/product/productUnitConversion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productVariantCreate": createHandler({
      operationId: "/catalog/product/productVariantCreate",
      method: "POST",
      path: "/catalog/product/productVariant",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productVariantRead": createHandler({
      operationId: "/catalog/product/productVariantRead",
      method: "GET",
      path: "/catalog/product/productVariant",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productVariantUpdate": createHandler({
      operationId: "/catalog/product/productVariantUpdate",
      method: "PUT",
      path: "/catalog/product/productVariant",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productVariantDelete": createHandler({
      operationId: "/catalog/product/productVariantDelete",
      method: "DELETE",
      path: "/catalog/product/productVariant/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/productVariantReadById": createHandler({
      operationId: "/catalog/product/productVariantReadById",
      method: "GET",
      path: "/catalog/product/productVariant/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/unitCreate": createHandler({
      operationId: "/catalog/product/unitCreate",
      method: "POST",
      path: "/catalog/product/unit",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/unitRead": createHandler({
      operationId: "/catalog/product/unitRead",
      method: "GET",
      path: "/catalog/product/unit",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/unitUpdate": createHandler({
      operationId: "/catalog/product/unitUpdate",
      method: "PUT",
      path: "/catalog/product/unit",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/unitDelete": createHandler({
      operationId: "/catalog/product/unitDelete",
      method: "DELETE",
      path: "/catalog/product/unit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/catalog/product/unitReadById": createHandler({
      operationId: "/catalog/product/unitReadById",
      method: "GET",
      path: "/catalog/product/unit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "commercial/contract": {
    "/commercial/contract/contractCreate": createHandler({
      operationId: "/commercial/contract/contractCreate",
      method: "POST",
      path: "/commercial/contract/contract",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractRead": createHandler({
      operationId: "/commercial/contract/contractRead",
      method: "GET",
      path: "/commercial/contract/contract",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractUpdate": createHandler({
      operationId: "/commercial/contract/contractUpdate",
      method: "PUT",
      path: "/commercial/contract/contract",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractDelete": createHandler({
      operationId: "/commercial/contract/contractDelete",
      method: "DELETE",
      path: "/commercial/contract/contract/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractReadById": createHandler({
      operationId: "/commercial/contract/contractReadById",
      method: "GET",
      path: "/commercial/contract/contract/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingCreate": createHandler({
      operationId: "/commercial/contract/contractBillingCreate",
      method: "POST",
      path: "/commercial/contract/contractBilling",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingRead": createHandler({
      operationId: "/commercial/contract/contractBillingRead",
      method: "GET",
      path: "/commercial/contract/contractBilling",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingUpdate": createHandler({
      operationId: "/commercial/contract/contractBillingUpdate",
      method: "PUT",
      path: "/commercial/contract/contractBilling",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingDelete": createHandler({
      operationId: "/commercial/contract/contractBillingDelete",
      method: "DELETE",
      path: "/commercial/contract/contractBilling/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingReadById": createHandler({
      operationId: "/commercial/contract/contractBillingReadById",
      method: "GET",
      path: "/commercial/contract/contractBilling/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpApprove": createHandler({
      operationId: "/commercial/contract/contractBillingOpApprove",
      method: "POST",
      path: "/commercial/contract/contractBillingOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpApproveRevert": createHandler({
      operationId: "/commercial/contract/contractBillingOpApproveRevert",
      method: "POST",
      path: "/commercial/contract/contractBillingOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpCreate": createHandler({
      operationId: "/commercial/contract/contractBillingOpCreate",
      method: "POST",
      path: "/commercial/contract/contractBillingOpCreate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpCreateInvoice": createHandler({
      operationId: "/commercial/contract/contractBillingOpCreateInvoice",
      method: "POST",
      path: "/commercial/contract/contractBillingOpCreateInvoice",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpCreateInvoiceRevert": createHandler({
      operationId: "/commercial/contract/contractBillingOpCreateInvoiceRevert",
      method: "POST",
      path: "/commercial/contract/contractBillingOpCreateInvoiceRevert",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpCreateRevert": createHandler({
      operationId: "/commercial/contract/contractBillingOpCreateRevert",
      method: "POST",
      path: "/commercial/contract/contractBillingOpCreateRevert",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpPrepare": createHandler({
      operationId: "/commercial/contract/contractBillingOpPrepare",
      method: "POST",
      path: "/commercial/contract/contractBillingOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractBillingOpPrepareRevert": createHandler({
      operationId: "/commercial/contract/contractBillingOpPrepareRevert",
      method: "POST",
      path: "/commercial/contract/contractBillingOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractIndexCreate": createHandler({
      operationId: "/commercial/contract/contractIndexCreate",
      method: "POST",
      path: "/commercial/contract/contractIndex",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractIndexRead": createHandler({
      operationId: "/commercial/contract/contractIndexRead",
      method: "GET",
      path: "/commercial/contract/contractIndex",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractIndexUpdate": createHandler({
      operationId: "/commercial/contract/contractIndexUpdate",
      method: "PUT",
      path: "/commercial/contract/contractIndex",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractIndexDelete": createHandler({
      operationId: "/commercial/contract/contractIndexDelete",
      method: "DELETE",
      path: "/commercial/contract/contractIndex/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractIndexReadById": createHandler({
      operationId: "/commercial/contract/contractIndexReadById",
      method: "GET",
      path: "/commercial/contract/contractIndex/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractItemCreate": createHandler({
      operationId: "/commercial/contract/contractItemCreate",
      method: "POST",
      path: "/commercial/contract/contractItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractItemRead": createHandler({
      operationId: "/commercial/contract/contractItemRead",
      method: "GET",
      path: "/commercial/contract/contractItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractItemUpdate": createHandler({
      operationId: "/commercial/contract/contractItemUpdate",
      method: "PUT",
      path: "/commercial/contract/contractItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractItemDelete": createHandler({
      operationId: "/commercial/contract/contractItemDelete",
      method: "DELETE",
      path: "/commercial/contract/contractItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractItemReadById": createHandler({
      operationId: "/commercial/contract/contractItemReadById",
      method: "GET",
      path: "/commercial/contract/contractItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpAdjust": createHandler({
      operationId: "/commercial/contract/contractOpAdjust",
      method: "POST",
      path: "/commercial/contract/contractOpAdjust/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpApprove": createHandler({
      operationId: "/commercial/contract/contractOpApprove",
      method: "POST",
      path: "/commercial/contract/contractOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpApproveRevert": createHandler({
      operationId: "/commercial/contract/contractOpApproveRevert",
      method: "POST",
      path: "/commercial/contract/contractOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpCancel": createHandler({
      operationId: "/commercial/contract/contractOpCancel",
      method: "POST",
      path: "/commercial/contract/contractOpCancel/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpCancelRevert": createHandler({
      operationId: "/commercial/contract/contractOpCancelRevert",
      method: "POST",
      path: "/commercial/contract/contractOpCancelRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpCreate": createHandler({
      operationId: "/commercial/contract/contractOpCreate",
      method: "POST",
      path: "/commercial/contract/contractOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpPrepare": createHandler({
      operationId: "/commercial/contract/contractOpPrepare",
      method: "POST",
      path: "/commercial/contract/contractOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractOpPrepareRevert": createHandler({
      operationId: "/commercial/contract/contractOpPrepareRevert",
      method: "POST",
      path: "/commercial/contract/contractOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractProfileCreate": createHandler({
      operationId: "/commercial/contract/contractProfileCreate",
      method: "POST",
      path: "/commercial/contract/contractProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractProfileRead": createHandler({
      operationId: "/commercial/contract/contractProfileRead",
      method: "GET",
      path: "/commercial/contract/contractProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractProfileUpdate": createHandler({
      operationId: "/commercial/contract/contractProfileUpdate",
      method: "PUT",
      path: "/commercial/contract/contractProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractProfileDelete": createHandler({
      operationId: "/commercial/contract/contractProfileDelete",
      method: "DELETE",
      path: "/commercial/contract/contractProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/contract/contractProfileReadById": createHandler({
      operationId: "/commercial/contract/contractProfileReadById",
      method: "GET",
      path: "/commercial/contract/contractProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "commercial": {
    "/commercial/personHierarchyCreate": createHandler({
      operationId: "/commercial/personHierarchyCreate",
      method: "POST",
      path: "/commercial/personHierarchy",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/personHierarchyRead": createHandler({
      operationId: "/commercial/personHierarchyRead",
      method: "GET",
      path: "/commercial/personHierarchy",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/personHierarchyUpdate": createHandler({
      operationId: "/commercial/personHierarchyUpdate",
      method: "PUT",
      path: "/commercial/personHierarchy",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/personHierarchyDelete": createHandler({
      operationId: "/commercial/personHierarchyDelete",
      method: "DELETE",
      path: "/commercial/personHierarchy/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/personHierarchyReadById": createHandler({
      operationId: "/commercial/personHierarchyReadById",
      method: "GET",
      path: "/commercial/personHierarchy/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/personHierarchyViewRead": createHandler({
      operationId: "/commercial/personHierarchyViewRead",
      method: "GET",
      path: "/commercial/personHierarchyView",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListChangeRequestCreate": createHandler({
      operationId: "/commercial/priceListChangeRequestCreate",
      method: "POST",
      path: "/commercial/priceListChangeRequest",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListChangeRequestRead": createHandler({
      operationId: "/commercial/priceListChangeRequestRead",
      method: "GET",
      path: "/commercial/priceListChangeRequest",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListChangeRequestDelete": createHandler({
      operationId: "/commercial/priceListChangeRequestDelete",
      method: "DELETE",
      path: "/commercial/priceListChangeRequest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListChangeRequestReadById": createHandler({
      operationId: "/commercial/priceListChangeRequestReadById",
      method: "GET",
      path: "/commercial/priceListChangeRequest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListChangeRequestOpApprove": createHandler({
      operationId: "/commercial/priceListChangeRequestOpApprove",
      method: "POST",
      path: "/commercial/priceListChangeRequestOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListChangeRequestOpReject": createHandler({
      operationId: "/commercial/priceListChangeRequestOpReject",
      method: "POST",
      path: "/commercial/priceListChangeRequestOpReject/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListOpFind": createHandler({
      operationId: "/commercial/priceListOpFind",
      method: "POST",
      path: "/commercial/priceListOpFind/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListTransformationCreate": createHandler({
      operationId: "/commercial/priceListTransformationCreate",
      method: "POST",
      path: "/commercial/priceListTransformation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListTransformationRead": createHandler({
      operationId: "/commercial/priceListTransformationRead",
      method: "GET",
      path: "/commercial/priceListTransformation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListTransformationUpdate": createHandler({
      operationId: "/commercial/priceListTransformationUpdate",
      method: "PUT",
      path: "/commercial/priceListTransformation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListTransformationDelete": createHandler({
      operationId: "/commercial/priceListTransformationDelete",
      method: "DELETE",
      path: "/commercial/priceListTransformation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListTransformationReadById": createHandler({
      operationId: "/commercial/priceListTransformationReadById",
      method: "GET",
      path: "/commercial/priceListTransformation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/priceListTransformationOpCalculate": createHandler({
      operationId: "/commercial/priceListTransformationOpCalculate",
      method: "POST",
      path: "/commercial/priceListTransformationOpCalculate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "commercial/target": {
    "/commercial/target/targetCreate": createHandler({
      operationId: "/commercial/target/targetCreate",
      method: "POST",
      path: "/commercial/target/target",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetRead": createHandler({
      operationId: "/commercial/target/targetRead",
      method: "GET",
      path: "/commercial/target/target",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetUpdate": createHandler({
      operationId: "/commercial/target/targetUpdate",
      method: "PUT",
      path: "/commercial/target/target",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetDelete": createHandler({
      operationId: "/commercial/target/targetDelete",
      method: "DELETE",
      path: "/commercial/target/target/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetReadById": createHandler({
      operationId: "/commercial/target/targetReadById",
      method: "GET",
      path: "/commercial/target/target/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetGroupCreate": createHandler({
      operationId: "/commercial/target/targetGroupCreate",
      method: "POST",
      path: "/commercial/target/targetGroup",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetGroupRead": createHandler({
      operationId: "/commercial/target/targetGroupRead",
      method: "GET",
      path: "/commercial/target/targetGroup",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetGroupUpdate": createHandler({
      operationId: "/commercial/target/targetGroupUpdate",
      method: "PUT",
      path: "/commercial/target/targetGroup",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetGroupDelete": createHandler({
      operationId: "/commercial/target/targetGroupDelete",
      method: "DELETE",
      path: "/commercial/target/targetGroup/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetGroupReadById": createHandler({
      operationId: "/commercial/target/targetGroupReadById",
      method: "GET",
      path: "/commercial/target/targetGroup/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetIntervalCreate": createHandler({
      operationId: "/commercial/target/targetIntervalCreate",
      method: "POST",
      path: "/commercial/target/targetInterval",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetIntervalRead": createHandler({
      operationId: "/commercial/target/targetIntervalRead",
      method: "GET",
      path: "/commercial/target/targetInterval",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetIntervalUpdate": createHandler({
      operationId: "/commercial/target/targetIntervalUpdate",
      method: "PUT",
      path: "/commercial/target/targetInterval",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetIntervalDelete": createHandler({
      operationId: "/commercial/target/targetIntervalDelete",
      method: "DELETE",
      path: "/commercial/target/targetInterval/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetIntervalReadById": createHandler({
      operationId: "/commercial/target/targetIntervalReadById",
      method: "GET",
      path: "/commercial/target/targetInterval/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetPlanCreate": createHandler({
      operationId: "/commercial/target/targetPlanCreate",
      method: "POST",
      path: "/commercial/target/targetPlan",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetPlanRead": createHandler({
      operationId: "/commercial/target/targetPlanRead",
      method: "GET",
      path: "/commercial/target/targetPlan",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetPlanUpdate": createHandler({
      operationId: "/commercial/target/targetPlanUpdate",
      method: "PUT",
      path: "/commercial/target/targetPlan",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetPlanDelete": createHandler({
      operationId: "/commercial/target/targetPlanDelete",
      method: "DELETE",
      path: "/commercial/target/targetPlan/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/commercial/target/targetPlanReadById": createHandler({
      operationId: "/commercial/target/targetPlanReadById",
      method: "GET",
      path: "/commercial/target/targetPlan/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "financial/accounting": {
    "/financial/accounting/accountCreate": createHandler({
      operationId: "/financial/accounting/accountCreate",
      method: "POST",
      path: "/financial/accounting/account",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountRead": createHandler({
      operationId: "/financial/accounting/accountRead",
      method: "GET",
      path: "/financial/accounting/account",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountUpdate": createHandler({
      operationId: "/financial/accounting/accountUpdate",
      method: "PUT",
      path: "/financial/accounting/account",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDelete": createHandler({
      operationId: "/financial/accounting/accountDelete",
      method: "DELETE",
      path: "/financial/accounting/account/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountReadById": createHandler({
      operationId: "/financial/accounting/accountReadById",
      method: "GET",
      path: "/financial/accounting/account/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountCategoryCreate": createHandler({
      operationId: "/financial/accounting/accountCategoryCreate",
      method: "POST",
      path: "/financial/accounting/accountCategory",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountCategoryRead": createHandler({
      operationId: "/financial/accounting/accountCategoryRead",
      method: "GET",
      path: "/financial/accounting/accountCategory",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountCategoryUpdate": createHandler({
      operationId: "/financial/accounting/accountCategoryUpdate",
      method: "PUT",
      path: "/financial/accounting/accountCategory",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountCategoryDelete": createHandler({
      operationId: "/financial/accounting/accountCategoryDelete",
      method: "DELETE",
      path: "/financial/accounting/accountCategory/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountCategoryReadById": createHandler({
      operationId: "/financial/accounting/accountCategoryReadById",
      method: "GET",
      path: "/financial/accounting/accountCategory/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartCreate": createHandler({
      operationId: "/financial/accounting/accountChartCreate",
      method: "POST",
      path: "/financial/accounting/accountChart",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartRead": createHandler({
      operationId: "/financial/accounting/accountChartRead",
      method: "GET",
      path: "/financial/accounting/accountChart",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartUpdate": createHandler({
      operationId: "/financial/accounting/accountChartUpdate",
      method: "PUT",
      path: "/financial/accounting/accountChart",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartDelete": createHandler({
      operationId: "/financial/accounting/accountChartDelete",
      method: "DELETE",
      path: "/financial/accounting/accountChart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartReadById": createHandler({
      operationId: "/financial/accounting/accountChartReadById",
      method: "GET",
      path: "/financial/accounting/accountChart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartOpClone": createHandler({
      operationId: "/financial/accounting/accountChartOpClone",
      method: "POST",
      path: "/financial/accounting/accountChartOpClone/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartOpImport": createHandler({
      operationId: "/financial/accounting/accountChartOpImport",
      method: "POST",
      path: "/financial/accounting/accountChartOpImport/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartOpLevelCreate": createHandler({
      operationId: "/financial/accounting/accountChartOpLevelCreate",
      method: "POST",
      path: "/financial/accounting/accountChartOpLevelCreate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartOpLevelDelete": createHandler({
      operationId: "/financial/accounting/accountChartOpLevelDelete",
      method: "POST",
      path: "/financial/accounting/accountChartOpLevelDelete/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartOpLevelUpdate": createHandler({
      operationId: "/financial/accounting/accountChartOpLevelUpdate",
      method: "POST",
      path: "/financial/accounting/accountChartOpLevelUpdate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountChartOpNextShortCode": createHandler({
      operationId: "/financial/accounting/accountChartOpNextShortCode",
      method: "POST",
      path: "/financial/accounting/accountChartOpNextShortCode/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionCreate": createHandler({
      operationId: "/financial/accounting/accountConversionCreate",
      method: "POST",
      path: "/financial/accounting/accountConversion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionRead": createHandler({
      operationId: "/financial/accounting/accountConversionRead",
      method: "GET",
      path: "/financial/accounting/accountConversion",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionUpdate": createHandler({
      operationId: "/financial/accounting/accountConversionUpdate",
      method: "PUT",
      path: "/financial/accounting/accountConversion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionDelete": createHandler({
      operationId: "/financial/accounting/accountConversionDelete",
      method: "DELETE",
      path: "/financial/accounting/accountConversion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionReadById": createHandler({
      operationId: "/financial/accounting/accountConversionReadById",
      method: "GET",
      path: "/financial/accounting/accountConversion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionChartCreate": createHandler({
      operationId: "/financial/accounting/accountConversionChartCreate",
      method: "POST",
      path: "/financial/accounting/accountConversionChart",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionChartRead": createHandler({
      operationId: "/financial/accounting/accountConversionChartRead",
      method: "GET",
      path: "/financial/accounting/accountConversionChart",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionChartUpdate": createHandler({
      operationId: "/financial/accounting/accountConversionChartUpdate",
      method: "PUT",
      path: "/financial/accounting/accountConversionChart",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionChartDelete": createHandler({
      operationId: "/financial/accounting/accountConversionChartDelete",
      method: "DELETE",
      path: "/financial/accounting/accountConversionChart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountConversionChartReadById": createHandler({
      operationId: "/financial/accounting/accountConversionChartReadById",
      method: "GET",
      path: "/financial/accounting/accountConversionChart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDefaultCreate": createHandler({
      operationId: "/financial/accounting/accountDefaultCreate",
      method: "POST",
      path: "/financial/accounting/accountDefault",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDefaultRead": createHandler({
      operationId: "/financial/accounting/accountDefaultRead",
      method: "GET",
      path: "/financial/accounting/accountDefault",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDefaultUpdate": createHandler({
      operationId: "/financial/accounting/accountDefaultUpdate",
      method: "PUT",
      path: "/financial/accounting/accountDefault",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDefaultDelete": createHandler({
      operationId: "/financial/accounting/accountDefaultDelete",
      method: "DELETE",
      path: "/financial/accounting/accountDefault/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDefaultReadById": createHandler({
      operationId: "/financial/accounting/accountDefaultReadById",
      method: "GET",
      path: "/financial/accounting/accountDefault/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountDefaultOpRead": createHandler({
      operationId: "/financial/accounting/accountDefaultOpRead",
      method: "POST",
      path: "/financial/accounting/accountDefaultOpRead",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/accountFiscalYearRead": createHandler({
      operationId: "/financial/accounting/accountFiscalYearRead",
      method: "GET",
      path: "/financial/accounting/accountFiscalYear",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/assetInventoryRead": createHandler({
      operationId: "/financial/accounting/assetInventoryRead",
      method: "GET",
      path: "/financial/accounting/assetInventory",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/assetInventoryCurrentRead": createHandler({
      operationId: "/financial/accounting/assetInventoryCurrentRead",
      method: "GET",
      path: "/financial/accounting/assetInventoryCurrent",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/assetTagRead": createHandler({
      operationId: "/financial/accounting/assetTagRead",
      method: "GET",
      path: "/financial/accounting/assetTag",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/assetTagReadById": createHandler({
      operationId: "/financial/accounting/assetTagReadById",
      method: "GET",
      path: "/financial/accounting/assetTag/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/fiscalYearOpClose": createHandler({
      operationId: "/financial/accounting/fiscalYearOpClose",
      method: "POST",
      path: "/financial/accounting/fiscalYearOpClose/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryCreate": createHandler({
      operationId: "/financial/accounting/journalEntryCreate",
      method: "POST",
      path: "/financial/accounting/journalEntry",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryRead": createHandler({
      operationId: "/financial/accounting/journalEntryRead",
      method: "GET",
      path: "/financial/accounting/journalEntry",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryUpdate": createHandler({
      operationId: "/financial/accounting/journalEntryUpdate",
      method: "PUT",
      path: "/financial/accounting/journalEntry",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryDelete": createHandler({
      operationId: "/financial/accounting/journalEntryDelete",
      method: "DELETE",
      path: "/financial/accounting/journalEntry/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryReadById": createHandler({
      operationId: "/financial/accounting/journalEntryReadById",
      method: "GET",
      path: "/financial/accounting/journalEntry/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryOpCreate": createHandler({
      operationId: "/financial/accounting/journalEntryOpCreate",
      method: "POST",
      path: "/financial/accounting/journalEntryOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryOpPublish": createHandler({
      operationId: "/financial/accounting/journalEntryOpPublish",
      method: "POST",
      path: "/financial/accounting/journalEntryOpPublish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryOpPublishRevert": createHandler({
      operationId: "/financial/accounting/journalEntryOpPublishRevert",
      method: "POST",
      path: "/financial/accounting/journalEntryOpPublishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalEntryOpUpdate": createHandler({
      operationId: "/financial/accounting/journalEntryOpUpdate",
      method: "POST",
      path: "/financial/accounting/journalEntryOpUpdate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalItemCreate": createHandler({
      operationId: "/financial/accounting/journalItemCreate",
      method: "POST",
      path: "/financial/accounting/journalItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalItemRead": createHandler({
      operationId: "/financial/accounting/journalItemRead",
      method: "GET",
      path: "/financial/accounting/journalItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalItemUpdate": createHandler({
      operationId: "/financial/accounting/journalItemUpdate",
      method: "PUT",
      path: "/financial/accounting/journalItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalItemDelete": createHandler({
      operationId: "/financial/accounting/journalItemDelete",
      method: "DELETE",
      path: "/financial/accounting/journalItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/journalItemReadById": createHandler({
      operationId: "/financial/accounting/journalItemReadById",
      method: "GET",
      path: "/financial/accounting/journalItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/ledgerItemRead": createHandler({
      operationId: "/financial/accounting/ledgerItemRead",
      method: "GET",
      path: "/financial/accounting/ledgerItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/ledgerItemReadById": createHandler({
      operationId: "/financial/accounting/ledgerItemReadById",
      method: "GET",
      path: "/financial/accounting/ledgerItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/ledgerItemBalanceRead": createHandler({
      operationId: "/financial/accounting/ledgerItemBalanceRead",
      method: "GET",
      path: "/financial/accounting/ledgerItemBalance",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterCreate": createHandler({
      operationId: "/financial/accounting/resultCenterCreate",
      method: "POST",
      path: "/financial/accounting/resultCenter",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterRead": createHandler({
      operationId: "/financial/accounting/resultCenterRead",
      method: "GET",
      path: "/financial/accounting/resultCenter",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterUpdate": createHandler({
      operationId: "/financial/accounting/resultCenterUpdate",
      method: "PUT",
      path: "/financial/accounting/resultCenter",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterDelete": createHandler({
      operationId: "/financial/accounting/resultCenterDelete",
      method: "DELETE",
      path: "/financial/accounting/resultCenter/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterReadById": createHandler({
      operationId: "/financial/accounting/resultCenterReadById",
      method: "GET",
      path: "/financial/accounting/resultCenter/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartCreate": createHandler({
      operationId: "/financial/accounting/resultCenterChartCreate",
      method: "POST",
      path: "/financial/accounting/resultCenterChart",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartRead": createHandler({
      operationId: "/financial/accounting/resultCenterChartRead",
      method: "GET",
      path: "/financial/accounting/resultCenterChart",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartUpdate": createHandler({
      operationId: "/financial/accounting/resultCenterChartUpdate",
      method: "PUT",
      path: "/financial/accounting/resultCenterChart",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartDelete": createHandler({
      operationId: "/financial/accounting/resultCenterChartDelete",
      method: "DELETE",
      path: "/financial/accounting/resultCenterChart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartReadById": createHandler({
      operationId: "/financial/accounting/resultCenterChartReadById",
      method: "GET",
      path: "/financial/accounting/resultCenterChart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartOpLevelCreate": createHandler({
      operationId: "/financial/accounting/resultCenterChartOpLevelCreate",
      method: "POST",
      path: "/financial/accounting/resultCenterChartOpLevelCreate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartOpLevelDelete": createHandler({
      operationId: "/financial/accounting/resultCenterChartOpLevelDelete",
      method: "POST",
      path: "/financial/accounting/resultCenterChartOpLevelDelete/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/accounting/resultCenterChartOpLevelUpdate": createHandler({
      operationId: "/financial/accounting/resultCenterChartOpLevelUpdate",
      method: "POST",
      path: "/financial/accounting/resultCenterChartOpLevelUpdate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "financial/billing": {
    "/financial/billing/batchRequestCreate": createHandler({
      operationId: "/financial/billing/batchRequestCreate",
      method: "POST",
      path: "/financial/billing/batchRequest",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestRead": createHandler({
      operationId: "/financial/billing/batchRequestRead",
      method: "GET",
      path: "/financial/billing/batchRequest",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestUpdate": createHandler({
      operationId: "/financial/billing/batchRequestUpdate",
      method: "PUT",
      path: "/financial/billing/batchRequest",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestDelete": createHandler({
      operationId: "/financial/billing/batchRequestDelete",
      method: "DELETE",
      path: "/financial/billing/batchRequest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestReadById": createHandler({
      operationId: "/financial/billing/batchRequestReadById",
      method: "GET",
      path: "/financial/billing/batchRequest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpAddInstructions": createHandler({
      operationId: "/financial/billing/batchRequestOpAddInstructions",
      method: "POST",
      path: "/financial/billing/batchRequestOpAddInstructions/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpApprove": createHandler({
      operationId: "/financial/billing/batchRequestOpApprove",
      method: "POST",
      path: "/financial/billing/batchRequestOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpApproveRevert": createHandler({
      operationId: "/financial/billing/batchRequestOpApproveRevert",
      method: "POST",
      path: "/financial/billing/batchRequestOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpCreateFile": createHandler({
      operationId: "/financial/billing/batchRequestOpCreateFile",
      method: "POST",
      path: "/financial/billing/batchRequestOpCreateFile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpPrepare": createHandler({
      operationId: "/financial/billing/batchRequestOpPrepare",
      method: "POST",
      path: "/financial/billing/batchRequestOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpPrepareRevert": createHandler({
      operationId: "/financial/billing/batchRequestOpPrepareRevert",
      method: "POST",
      path: "/financial/billing/batchRequestOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpSend": createHandler({
      operationId: "/financial/billing/batchRequestOpSend",
      method: "POST",
      path: "/financial/billing/batchRequestOpSend/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchRequestOpSendRevert": createHandler({
      operationId: "/financial/billing/batchRequestOpSendRevert",
      method: "POST",
      path: "/financial/billing/batchRequestOpSendRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseRead": createHandler({
      operationId: "/financial/billing/batchResponseRead",
      method: "GET",
      path: "/financial/billing/batchResponse",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseDelete": createHandler({
      operationId: "/financial/billing/batchResponseDelete",
      method: "DELETE",
      path: "/financial/billing/batchResponse/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseReadById": createHandler({
      operationId: "/financial/billing/batchResponseReadById",
      method: "GET",
      path: "/financial/billing/batchResponse/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseOpApprove": createHandler({
      operationId: "/financial/billing/batchResponseOpApprove",
      method: "POST",
      path: "/financial/billing/batchResponseOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseOpApproveRevert": createHandler({
      operationId: "/financial/billing/batchResponseOpApproveRevert",
      method: "POST",
      path: "/financial/billing/batchResponseOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseOpCreate": createHandler({
      operationId: "/financial/billing/batchResponseOpCreate",
      method: "POST",
      path: "/financial/billing/batchResponseOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseOpPrepare": createHandler({
      operationId: "/financial/billing/batchResponseOpPrepare",
      method: "POST",
      path: "/financial/billing/batchResponseOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseOpPrepareRevert": createHandler({
      operationId: "/financial/billing/batchResponseOpPrepareRevert",
      method: "POST",
      path: "/financial/billing/batchResponseOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/batchResponseOpProcess": createHandler({
      operationId: "/financial/billing/batchResponseOpProcess",
      method: "POST",
      path: "/financial/billing/batchResponseOpProcess/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestRead": createHandler({
      operationId: "/financial/billing/instructionRequestRead",
      method: "GET",
      path: "/financial/billing/instructionRequest",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestUpdate": createHandler({
      operationId: "/financial/billing/instructionRequestUpdate",
      method: "PUT",
      path: "/financial/billing/instructionRequest",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestDelete": createHandler({
      operationId: "/financial/billing/instructionRequestDelete",
      method: "DELETE",
      path: "/financial/billing/instructionRequest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestReadById": createHandler({
      operationId: "/financial/billing/instructionRequestReadById",
      method: "GET",
      path: "/financial/billing/instructionRequest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestOpAddToBatch": createHandler({
      operationId: "/financial/billing/instructionRequestOpAddToBatch",
      method: "POST",
      path: "/financial/billing/instructionRequestOpAddToBatch/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestOpCreate": createHandler({
      operationId: "/financial/billing/instructionRequestOpCreate",
      method: "POST",
      path: "/financial/billing/instructionRequestOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestOpCreateChangeDueDate": createHandler({
      operationId: "/financial/billing/instructionRequestOpCreateChangeDueDate",
      method: "POST",
      path: "/financial/billing/instructionRequestOpCreateChangeDueDate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestOpCreateRegister": createHandler({
      operationId: "/financial/billing/instructionRequestOpCreateRegister",
      method: "POST",
      path: "/financial/billing/instructionRequestOpCreateRegister",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestOpCreateUnregister": createHandler({
      operationId: "/financial/billing/instructionRequestOpCreateUnregister",
      method: "POST",
      path: "/financial/billing/instructionRequestOpCreateUnregister",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionRequestOpRemoveFromBatch": createHandler({
      operationId: "/financial/billing/instructionRequestOpRemoveFromBatch",
      method: "POST",
      path: "/financial/billing/instructionRequestOpRemoveFromBatch/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseCreate": createHandler({
      operationId: "/financial/billing/instructionResponseCreate",
      method: "POST",
      path: "/financial/billing/instructionResponse",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseRead": createHandler({
      operationId: "/financial/billing/instructionResponseRead",
      method: "GET",
      path: "/financial/billing/instructionResponse",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseUpdate": createHandler({
      operationId: "/financial/billing/instructionResponseUpdate",
      method: "PUT",
      path: "/financial/billing/instructionResponse",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseDelete": createHandler({
      operationId: "/financial/billing/instructionResponseDelete",
      method: "DELETE",
      path: "/financial/billing/instructionResponse/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseReadById": createHandler({
      operationId: "/financial/billing/instructionResponseReadById",
      method: "GET",
      path: "/financial/billing/instructionResponse/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseOpIgnore": createHandler({
      operationId: "/financial/billing/instructionResponseOpIgnore",
      method: "POST",
      path: "/financial/billing/instructionResponseOpIgnore/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseOpIgnoreRevert": createHandler({
      operationId: "/financial/billing/instructionResponseOpIgnoreRevert",
      method: "POST",
      path: "/financial/billing/instructionResponseOpIgnoreRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/instructionResponseOpProcess": createHandler({
      operationId: "/financial/billing/instructionResponseOpProcess",
      method: "POST",
      path: "/financial/billing/instructionResponseOpProcess/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/walletCreate": createHandler({
      operationId: "/financial/billing/walletCreate",
      method: "POST",
      path: "/financial/billing/wallet",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/walletRead": createHandler({
      operationId: "/financial/billing/walletRead",
      method: "GET",
      path: "/financial/billing/wallet",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/walletUpdate": createHandler({
      operationId: "/financial/billing/walletUpdate",
      method: "PUT",
      path: "/financial/billing/wallet",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/walletDelete": createHandler({
      operationId: "/financial/billing/walletDelete",
      method: "DELETE",
      path: "/financial/billing/wallet/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/walletReadById": createHandler({
      operationId: "/financial/billing/walletReadById",
      method: "GET",
      path: "/financial/billing/wallet/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/billing/walletOpGetSequence": createHandler({
      operationId: "/financial/billing/walletOpGetSequence",
      method: "POST",
      path: "/financial/billing/walletOpGetSequence/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "financial/credit": {
    "/financial/credit/creditLineCreate": createHandler({
      operationId: "/financial/credit/creditLineCreate",
      method: "POST",
      path: "/financial/credit/creditLine",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineRead": createHandler({
      operationId: "/financial/credit/creditLineRead",
      method: "GET",
      path: "/financial/credit/creditLine",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineUpdate": createHandler({
      operationId: "/financial/credit/creditLineUpdate",
      method: "PUT",
      path: "/financial/credit/creditLine",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineDelete": createHandler({
      operationId: "/financial/credit/creditLineDelete",
      method: "DELETE",
      path: "/financial/credit/creditLine/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineReadById": createHandler({
      operationId: "/financial/credit/creditLineReadById",
      method: "GET",
      path: "/financial/credit/creditLine/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineItemCreate": createHandler({
      operationId: "/financial/credit/creditLineItemCreate",
      method: "POST",
      path: "/financial/credit/creditLineItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineItemRead": createHandler({
      operationId: "/financial/credit/creditLineItemRead",
      method: "GET",
      path: "/financial/credit/creditLineItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineItemUpdate": createHandler({
      operationId: "/financial/credit/creditLineItemUpdate",
      method: "PUT",
      path: "/financial/credit/creditLineItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineItemDelete": createHandler({
      operationId: "/financial/credit/creditLineItemDelete",
      method: "DELETE",
      path: "/financial/credit/creditLineItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/credit/creditLineItemReadById": createHandler({
      operationId: "/financial/credit/creditLineItemReadById",
      method: "GET",
      path: "/financial/credit/creditLineItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "financial": {
    "/financial/currencyCreate": createHandler({
      operationId: "/financial/currencyCreate",
      method: "POST",
      path: "/financial/currency",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyRead": createHandler({
      operationId: "/financial/currencyRead",
      method: "GET",
      path: "/financial/currency",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyUpdate": createHandler({
      operationId: "/financial/currencyUpdate",
      method: "PUT",
      path: "/financial/currency",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyDelete": createHandler({
      operationId: "/financial/currencyDelete",
      method: "DELETE",
      path: "/financial/currency/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyReadById": createHandler({
      operationId: "/financial/currencyReadById",
      method: "GET",
      path: "/financial/currency/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateCreate": createHandler({
      operationId: "/financial/currencyExchangeRateCreate",
      method: "POST",
      path: "/financial/currencyExchangeRate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateRead": createHandler({
      operationId: "/financial/currencyExchangeRateRead",
      method: "GET",
      path: "/financial/currencyExchangeRate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateUpdate": createHandler({
      operationId: "/financial/currencyExchangeRateUpdate",
      method: "PUT",
      path: "/financial/currencyExchangeRate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateDelete": createHandler({
      operationId: "/financial/currencyExchangeRateDelete",
      method: "DELETE",
      path: "/financial/currencyExchangeRate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateReadById": createHandler({
      operationId: "/financial/currencyExchangeRateReadById",
      method: "GET",
      path: "/financial/currencyExchangeRate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateOpConvert": createHandler({
      operationId: "/financial/currencyExchangeRateOpConvert",
      method: "POST",
      path: "/financial/currencyExchangeRateOpConvert",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyExchangeRateOpGetExchangeRate": createHandler({
      operationId: "/financial/currencyExchangeRateOpGetExchangeRate",
      method: "POST",
      path: "/financial/currencyExchangeRateOpGetExchangeRate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/currencyOpReadByCode": createHandler({
      operationId: "/financial/currencyOpReadByCode",
      method: "POST",
      path: "/financial/currencyOpReadByCode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableCreate": createHandler({
      operationId: "/financial/payableCreate",
      method: "POST",
      path: "/financial/payable",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableRead": createHandler({
      operationId: "/financial/payableRead",
      method: "GET",
      path: "/financial/payable",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableUpdate": createHandler({
      operationId: "/financial/payableUpdate",
      method: "PUT",
      path: "/financial/payable",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableDelete": createHandler({
      operationId: "/financial/payableDelete",
      method: "DELETE",
      path: "/financial/payable/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableReadById": createHandler({
      operationId: "/financial/payableReadById",
      method: "GET",
      path: "/financial/payable/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpApprove": createHandler({
      operationId: "/financial/payableOpApprove",
      method: "POST",
      path: "/financial/payableOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpApproveRevert": createHandler({
      operationId: "/financial/payableOpApproveRevert",
      method: "POST",
      path: "/financial/payableOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpChangeWallet": createHandler({
      operationId: "/financial/payableOpChangeWallet",
      method: "POST",
      path: "/financial/payableOpChangeWallet/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpPrepare": createHandler({
      operationId: "/financial/payableOpPrepare",
      method: "POST",
      path: "/financial/payableOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpPrepareRevert": createHandler({
      operationId: "/financial/payableOpPrepareRevert",
      method: "POST",
      path: "/financial/payableOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpRepeat": createHandler({
      operationId: "/financial/payableOpRepeat",
      method: "POST",
      path: "/financial/payableOpRepeat/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpSettle": createHandler({
      operationId: "/financial/payableOpSettle",
      method: "POST",
      path: "/financial/payableOpSettle",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpUpdate": createHandler({
      operationId: "/financial/payableOpUpdate",
      method: "POST",
      path: "/financial/payableOpUpdate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableOpUpdatePrepared": createHandler({
      operationId: "/financial/payableOpUpdatePrepared",
      method: "POST",
      path: "/financial/payableOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementRead": createHandler({
      operationId: "/financial/payableSettlementRead",
      method: "GET",
      path: "/financial/payableSettlement",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementDelete": createHandler({
      operationId: "/financial/payableSettlementDelete",
      method: "DELETE",
      path: "/financial/payableSettlement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementReadById": createHandler({
      operationId: "/financial/payableSettlementReadById",
      method: "GET",
      path: "/financial/payableSettlement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementBillingTitleRead": createHandler({
      operationId: "/financial/payableSettlementBillingTitleRead",
      method: "GET",
      path: "/financial/payableSettlementBillingTitle",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementBillingTitleReadById": createHandler({
      operationId: "/financial/payableSettlementBillingTitleReadById",
      method: "GET",
      path: "/financial/payableSettlementBillingTitle/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementMethodRead": createHandler({
      operationId: "/financial/payableSettlementMethodRead",
      method: "GET",
      path: "/financial/payableSettlementMethod",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/payableSettlementMethodReadById": createHandler({
      operationId: "/financial/payableSettlementMethodReadById",
      method: "GET",
      path: "/financial/payableSettlementMethod/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableCreate": createHandler({
      operationId: "/financial/receivableCreate",
      method: "POST",
      path: "/financial/receivable",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableRead": createHandler({
      operationId: "/financial/receivableRead",
      method: "GET",
      path: "/financial/receivable",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableUpdate": createHandler({
      operationId: "/financial/receivableUpdate",
      method: "PUT",
      path: "/financial/receivable",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableDelete": createHandler({
      operationId: "/financial/receivableDelete",
      method: "DELETE",
      path: "/financial/receivable/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableReadById": createHandler({
      operationId: "/financial/receivableReadById",
      method: "GET",
      path: "/financial/receivable/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpApprove": createHandler({
      operationId: "/financial/receivableOpApprove",
      method: "POST",
      path: "/financial/receivableOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpApproveRevert": createHandler({
      operationId: "/financial/receivableOpApproveRevert",
      method: "POST",
      path: "/financial/receivableOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpPrepare": createHandler({
      operationId: "/financial/receivableOpPrepare",
      method: "POST",
      path: "/financial/receivableOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpPrepareRevert": createHandler({
      operationId: "/financial/receivableOpPrepareRevert",
      method: "POST",
      path: "/financial/receivableOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpRepeat": createHandler({
      operationId: "/financial/receivableOpRepeat",
      method: "POST",
      path: "/financial/receivableOpRepeat/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpSend": createHandler({
      operationId: "/financial/receivableOpSend",
      method: "POST",
      path: "/financial/receivableOpSend",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpSettle": createHandler({
      operationId: "/financial/receivableOpSettle",
      method: "POST",
      path: "/financial/receivableOpSettle",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpUpdate": createHandler({
      operationId: "/financial/receivableOpUpdate",
      method: "POST",
      path: "/financial/receivableOpUpdate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableOpUpdatePrepared": createHandler({
      operationId: "/financial/receivableOpUpdatePrepared",
      method: "POST",
      path: "/financial/receivableOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementRead": createHandler({
      operationId: "/financial/receivableSettlementRead",
      method: "GET",
      path: "/financial/receivableSettlement",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementDelete": createHandler({
      operationId: "/financial/receivableSettlementDelete",
      method: "DELETE",
      path: "/financial/receivableSettlement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementReadById": createHandler({
      operationId: "/financial/receivableSettlementReadById",
      method: "GET",
      path: "/financial/receivableSettlement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementBillingTitleRead": createHandler({
      operationId: "/financial/receivableSettlementBillingTitleRead",
      method: "GET",
      path: "/financial/receivableSettlementBillingTitle",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementBillingTitleReadById": createHandler({
      operationId: "/financial/receivableSettlementBillingTitleReadById",
      method: "GET",
      path: "/financial/receivableSettlementBillingTitle/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementMethodRead": createHandler({
      operationId: "/financial/receivableSettlementMethodRead",
      method: "GET",
      path: "/financial/receivableSettlementMethod",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/receivableSettlementMethodReadById": createHandler({
      operationId: "/financial/receivableSettlementMethodReadById",
      method: "GET",
      path: "/financial/receivableSettlementMethod/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "financial/salesCommission": {
    "/financial/salesCommission/salesCommissionCreate": createHandler({
      operationId: "/financial/salesCommission/salesCommissionCreate",
      method: "POST",
      path: "/financial/salesCommission/salesCommission",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionRead": createHandler({
      operationId: "/financial/salesCommission/salesCommissionRead",
      method: "GET",
      path: "/financial/salesCommission/salesCommission",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionUpdate": createHandler({
      operationId: "/financial/salesCommission/salesCommissionUpdate",
      method: "PUT",
      path: "/financial/salesCommission/salesCommission",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionDelete": createHandler({
      operationId: "/financial/salesCommission/salesCommissionDelete",
      method: "DELETE",
      path: "/financial/salesCommission/salesCommission/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionReadById": createHandler({
      operationId: "/financial/salesCommission/salesCommissionReadById",
      method: "GET",
      path: "/financial/salesCommission/salesCommission/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpApprove": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpApprove",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpApproveRevert": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpApproveRevert",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpCalculate": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpCalculate",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpCalculate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpCalculateRevert": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpCalculateRevert",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpCalculateRevert",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpPrepare": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpPrepare",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpPrepareRevert": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpPrepareRevert",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpPublish": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpPublish",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpPublish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/salesCommission/salesCommissionOpPublishRevert": createHandler({
      operationId: "/financial/salesCommission/salesCommissionOpPublishRevert",
      method: "POST",
      path: "/financial/salesCommission/salesCommissionOpPublishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "financial/treasury": {
    "/financial/treasury/accountStatementCreate": createHandler({
      operationId: "/financial/treasury/accountStatementCreate",
      method: "POST",
      path: "/financial/treasury/accountStatement",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementRead": createHandler({
      operationId: "/financial/treasury/accountStatementRead",
      method: "GET",
      path: "/financial/treasury/accountStatement",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementUpdate": createHandler({
      operationId: "/financial/treasury/accountStatementUpdate",
      method: "PUT",
      path: "/financial/treasury/accountStatement",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementDelete": createHandler({
      operationId: "/financial/treasury/accountStatementDelete",
      method: "DELETE",
      path: "/financial/treasury/accountStatement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementReadById": createHandler({
      operationId: "/financial/treasury/accountStatementReadById",
      method: "GET",
      path: "/financial/treasury/accountStatement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpConsolidate": createHandler({
      operationId: "/financial/treasury/accountStatementOpConsolidate",
      method: "POST",
      path: "/financial/treasury/accountStatementOpConsolidate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpConsolidateRevert": createHandler({
      operationId: "/financial/treasury/accountStatementOpConsolidateRevert",
      method: "POST",
      path: "/financial/treasury/accountStatementOpConsolidateRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpIdentify": createHandler({
      operationId: "/financial/treasury/accountStatementOpIdentify",
      method: "POST",
      path: "/financial/treasury/accountStatementOpIdentify/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpIdentifyRevert": createHandler({
      operationId: "/financial/treasury/accountStatementOpIdentifyRevert",
      method: "POST",
      path: "/financial/treasury/accountStatementOpIdentifyRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpIgnore": createHandler({
      operationId: "/financial/treasury/accountStatementOpIgnore",
      method: "POST",
      path: "/financial/treasury/accountStatementOpIgnore/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpIgnoreRevert": createHandler({
      operationId: "/financial/treasury/accountStatementOpIgnoreRevert",
      method: "POST",
      path: "/financial/treasury/accountStatementOpIgnoreRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpSettle": createHandler({
      operationId: "/financial/treasury/accountStatementOpSettle",
      method: "POST",
      path: "/financial/treasury/accountStatementOpSettle/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/accountStatementOpSettleRevert": createHandler({
      operationId: "/financial/treasury/accountStatementOpSettleRevert",
      method: "POST",
      path: "/financial/treasury/accountStatementOpSettleRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/expenseOpCreate": createHandler({
      operationId: "/financial/treasury/expenseOpCreate",
      method: "POST",
      path: "/financial/treasury/expenseOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/financial/treasury/revenueOpCreate": createHandler({
      operationId: "/financial/treasury/revenueOpCreate",
      method: "POST",
      path: "/financial/treasury/revenueOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "fiscal/br": {
    "/fiscal/br/dfeRead": createHandler({
      operationId: "/fiscal/br/dfeRead",
      method: "GET",
      path: "/fiscal/br/dfe",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeReadById": createHandler({
      operationId: "/fiscal/br/dfeReadById",
      method: "GET",
      path: "/fiscal/br/dfe/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcInCreate": createHandler({
      operationId: "/fiscal/br/dfeNfeProcInCreate",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcIn",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcInRead": createHandler({
      operationId: "/fiscal/br/dfeNfeProcInRead",
      method: "GET",
      path: "/fiscal/br/dfeNfeProcIn",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcInDelete": createHandler({
      operationId: "/fiscal/br/dfeNfeProcInDelete",
      method: "DELETE",
      path: "/fiscal/br/dfeNfeProcIn/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcInReadById": createHandler({
      operationId: "/fiscal/br/dfeNfeProcInReadById",
      method: "GET",
      path: "/fiscal/br/dfeNfeProcIn/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate": createHandler({
      operationId: "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert": createHandler({
      operationId: "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutRead": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutRead",
      method: "GET",
      path: "/fiscal/br/dfeNfeProcOut",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutDelete": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutDelete",
      method: "DELETE",
      path: "/fiscal/br/dfeNfeProcOut/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutReadById": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutReadById",
      method: "GET",
      path: "/fiscal/br/dfeNfeProcOut/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpCancel": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpCancel",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpCancel/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpConfirm": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpConfirm",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpConfirm/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpCorrect": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpCorrect",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpCorrect/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpCreate": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpCreate",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpCreate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpDownload": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpDownload",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpDownload",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpSign": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpSign",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpSign/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpSignRevert": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpSignRevert",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpSignRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpTransmit": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpTransmit",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpTransmit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeNfeProcOutOpUpload": createHandler({
      operationId: "/fiscal/br/dfeNfeProcOutOpUpload",
      method: "POST",
      path: "/fiscal/br/dfeNfeProcOutOpUpload",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeOpReadContent": createHandler({
      operationId: "/fiscal/br/dfeOpReadContent",
      method: "POST",
      path: "/fiscal/br/dfeOpReadContent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcEventoNFeInRead": createHandler({
      operationId: "/fiscal/br/dfeProcEventoNFeInRead",
      method: "GET",
      path: "/fiscal/br/dfeProcEventoNFeIn",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcEventoNFeInReadById": createHandler({
      operationId: "/fiscal/br/dfeProcEventoNFeInReadById",
      method: "GET",
      path: "/fiscal/br/dfeProcEventoNFeIn/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcEventoNFeOutRead": createHandler({
      operationId: "/fiscal/br/dfeProcEventoNFeOutRead",
      method: "GET",
      path: "/fiscal/br/dfeProcEventoNFeOut",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcEventoNFeOutReadById": createHandler({
      operationId: "/fiscal/br/dfeProcEventoNFeOutReadById",
      method: "GET",
      path: "/fiscal/br/dfeProcEventoNFeOut/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcInutNFeCreate": createHandler({
      operationId: "/fiscal/br/dfeProcInutNFeCreate",
      method: "POST",
      path: "/fiscal/br/dfeProcInutNFe",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcInutNFeRead": createHandler({
      operationId: "/fiscal/br/dfeProcInutNFeRead",
      method: "GET",
      path: "/fiscal/br/dfeProcInutNFe",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeProcInutNFeReadById": createHandler({
      operationId: "/fiscal/br/dfeProcInutNFeReadById",
      method: "GET",
      path: "/fiscal/br/dfeProcInutNFe/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeResEventoRead": createHandler({
      operationId: "/fiscal/br/dfeResEventoRead",
      method: "GET",
      path: "/fiscal/br/dfeResEvento",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeResEventoReadById": createHandler({
      operationId: "/fiscal/br/dfeResEventoReadById",
      method: "GET",
      path: "/fiscal/br/dfeResEvento/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeResNFeInRead": createHandler({
      operationId: "/fiscal/br/dfeResNFeInRead",
      method: "GET",
      path: "/fiscal/br/dfeResNFeIn",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeResNFeInReadById": createHandler({
      operationId: "/fiscal/br/dfeResNFeInReadById",
      method: "GET",
      path: "/fiscal/br/dfeResNFeIn/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/dfeResNFeInOpManifest": createHandler({
      operationId: "/fiscal/br/dfeResNFeInOpManifest",
      method: "POST",
      path: "/fiscal/br/dfeResNFeInOpManifest/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/documentSefazOpFetch": createHandler({
      operationId: "/fiscal/br/documentSefazOpFetch",
      method: "POST",
      path: "/fiscal/br/documentSefazOpFetch",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/br/spedOpExport": createHandler({
      operationId: "/fiscal/br/spedOpExport",
      method: "POST",
      path: "/fiscal/br/spedOpExport",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "fiscal": {
    "/fiscal/fiscalProfileOperationCreate": createHandler({
      operationId: "/fiscal/fiscalProfileOperationCreate",
      method: "POST",
      path: "/fiscal/fiscalProfileOperation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileOperationRead": createHandler({
      operationId: "/fiscal/fiscalProfileOperationRead",
      method: "GET",
      path: "/fiscal/fiscalProfileOperation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileOperationUpdate": createHandler({
      operationId: "/fiscal/fiscalProfileOperationUpdate",
      method: "PUT",
      path: "/fiscal/fiscalProfileOperation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileOperationDelete": createHandler({
      operationId: "/fiscal/fiscalProfileOperationDelete",
      method: "DELETE",
      path: "/fiscal/fiscalProfileOperation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileOperationReadById": createHandler({
      operationId: "/fiscal/fiscalProfileOperationReadById",
      method: "GET",
      path: "/fiscal/fiscalProfileOperation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileOperationOpReadByCode": createHandler({
      operationId: "/fiscal/fiscalProfileOperationOpReadByCode",
      method: "POST",
      path: "/fiscal/fiscalProfileOperationOpReadByCode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfilePersonCreate": createHandler({
      operationId: "/fiscal/fiscalProfilePersonCreate",
      method: "POST",
      path: "/fiscal/fiscalProfilePerson",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfilePersonRead": createHandler({
      operationId: "/fiscal/fiscalProfilePersonRead",
      method: "GET",
      path: "/fiscal/fiscalProfilePerson",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfilePersonUpdate": createHandler({
      operationId: "/fiscal/fiscalProfilePersonUpdate",
      method: "PUT",
      path: "/fiscal/fiscalProfilePerson",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfilePersonDelete": createHandler({
      operationId: "/fiscal/fiscalProfilePersonDelete",
      method: "DELETE",
      path: "/fiscal/fiscalProfilePerson/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfilePersonReadById": createHandler({
      operationId: "/fiscal/fiscalProfilePersonReadById",
      method: "GET",
      path: "/fiscal/fiscalProfilePerson/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileProductCreate": createHandler({
      operationId: "/fiscal/fiscalProfileProductCreate",
      method: "POST",
      path: "/fiscal/fiscalProfileProduct",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileProductRead": createHandler({
      operationId: "/fiscal/fiscalProfileProductRead",
      method: "GET",
      path: "/fiscal/fiscalProfileProduct",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileProductUpdate": createHandler({
      operationId: "/fiscal/fiscalProfileProductUpdate",
      method: "PUT",
      path: "/fiscal/fiscalProfileProduct",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileProductDelete": createHandler({
      operationId: "/fiscal/fiscalProfileProductDelete",
      method: "DELETE",
      path: "/fiscal/fiscalProfileProduct/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalProfileProductReadById": createHandler({
      operationId: "/fiscal/fiscalProfileProductReadById",
      method: "GET",
      path: "/fiscal/fiscalProfileProduct/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalRegionCreate": createHandler({
      operationId: "/fiscal/fiscalRegionCreate",
      method: "POST",
      path: "/fiscal/fiscalRegion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalRegionRead": createHandler({
      operationId: "/fiscal/fiscalRegionRead",
      method: "GET",
      path: "/fiscal/fiscalRegion",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalRegionUpdate": createHandler({
      operationId: "/fiscal/fiscalRegionUpdate",
      method: "PUT",
      path: "/fiscal/fiscalRegion",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalRegionDelete": createHandler({
      operationId: "/fiscal/fiscalRegionDelete",
      method: "DELETE",
      path: "/fiscal/fiscalRegion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalRegionReadById": createHandler({
      operationId: "/fiscal/fiscalRegionReadById",
      method: "GET",
      path: "/fiscal/fiscalRegion/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalRegionOpReadByCode": createHandler({
      operationId: "/fiscal/fiscalRegionOpReadByCode",
      method: "POST",
      path: "/fiscal/fiscalRegionOpReadByCode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearCreate": createHandler({
      operationId: "/fiscal/fiscalYearCreate",
      method: "POST",
      path: "/fiscal/fiscalYear",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearRead": createHandler({
      operationId: "/fiscal/fiscalYearRead",
      method: "GET",
      path: "/fiscal/fiscalYear",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearUpdate": createHandler({
      operationId: "/fiscal/fiscalYearUpdate",
      method: "PUT",
      path: "/fiscal/fiscalYear",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearDelete": createHandler({
      operationId: "/fiscal/fiscalYearDelete",
      method: "DELETE",
      path: "/fiscal/fiscalYear/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearReadById": createHandler({
      operationId: "/fiscal/fiscalYearReadById",
      method: "GET",
      path: "/fiscal/fiscalYear/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearOpPartialClosure": createHandler({
      operationId: "/fiscal/fiscalYearOpPartialClosure",
      method: "POST",
      path: "/fiscal/fiscalYearOpPartialClosure/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearOpPartialClosureRevert": createHandler({
      operationId: "/fiscal/fiscalYearOpPartialClosureRevert",
      method: "POST",
      path: "/fiscal/fiscalYearOpPartialClosureRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearOpPublish": createHandler({
      operationId: "/fiscal/fiscalYearOpPublish",
      method: "POST",
      path: "/fiscal/fiscalYearOpPublish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearOpPublishRevert": createHandler({
      operationId: "/fiscal/fiscalYearOpPublishRevert",
      method: "POST",
      path: "/fiscal/fiscalYearOpPublishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/fiscalYearOpRead": createHandler({
      operationId: "/fiscal/fiscalYearOpRead",
      method: "POST",
      path: "/fiscal/fiscalYearOpRead",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceCreate": createHandler({
      operationId: "/fiscal/incomingInvoiceCreate",
      method: "POST",
      path: "/fiscal/incomingInvoice",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceRead": createHandler({
      operationId: "/fiscal/incomingInvoiceRead",
      method: "GET",
      path: "/fiscal/incomingInvoice",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceUpdate": createHandler({
      operationId: "/fiscal/incomingInvoiceUpdate",
      method: "PUT",
      path: "/fiscal/incomingInvoice",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceDelete": createHandler({
      operationId: "/fiscal/incomingInvoiceDelete",
      method: "DELETE",
      path: "/fiscal/incomingInvoice/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceReadById": createHandler({
      operationId: "/fiscal/incomingInvoiceReadById",
      method: "GET",
      path: "/fiscal/incomingInvoice/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceItemCreate": createHandler({
      operationId: "/fiscal/incomingInvoiceItemCreate",
      method: "POST",
      path: "/fiscal/incomingInvoiceItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceItemRead": createHandler({
      operationId: "/fiscal/incomingInvoiceItemRead",
      method: "GET",
      path: "/fiscal/incomingInvoiceItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceItemUpdate": createHandler({
      operationId: "/fiscal/incomingInvoiceItemUpdate",
      method: "PUT",
      path: "/fiscal/incomingInvoiceItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceItemDelete": createHandler({
      operationId: "/fiscal/incomingInvoiceItemDelete",
      method: "DELETE",
      path: "/fiscal/incomingInvoiceItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceItemReadById": createHandler({
      operationId: "/fiscal/incomingInvoiceItemReadById",
      method: "GET",
      path: "/fiscal/incomingInvoiceItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpApprove": createHandler({
      operationId: "/fiscal/incomingInvoiceOpApprove",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpApproveDivergences": createHandler({
      operationId: "/fiscal/incomingInvoiceOpApproveDivergences",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpApproveDivergences/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpApproveRevert": createHandler({
      operationId: "/fiscal/incomingInvoiceOpApproveRevert",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpCreate": createHandler({
      operationId: "/fiscal/incomingInvoiceOpCreate",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpCreateFromIncomingList": createHandler({
      operationId: "/fiscal/incomingInvoiceOpCreateFromIncomingList",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpCreateFromIncomingList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpPrepare": createHandler({
      operationId: "/fiscal/incomingInvoiceOpPrepare",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpPrepareRevert": createHandler({
      operationId: "/fiscal/incomingInvoiceOpPrepareRevert",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpReject": createHandler({
      operationId: "/fiscal/incomingInvoiceOpReject",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpReject/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpRejectRevert": createHandler({
      operationId: "/fiscal/incomingInvoiceOpRejectRevert",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpRejectRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpReturn": createHandler({
      operationId: "/fiscal/incomingInvoiceOpReturn",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpReturn/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpTaxationCalc": createHandler({
      operationId: "/fiscal/incomingInvoiceOpTaxationCalc",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpTaxationCalc/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoiceOpUpdatePrepared": createHandler({
      operationId: "/fiscal/incomingInvoiceOpUpdatePrepared",
      method: "POST",
      path: "/fiscal/incomingInvoiceOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoicePaymentCreate": createHandler({
      operationId: "/fiscal/incomingInvoicePaymentCreate",
      method: "POST",
      path: "/fiscal/incomingInvoicePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoicePaymentRead": createHandler({
      operationId: "/fiscal/incomingInvoicePaymentRead",
      method: "GET",
      path: "/fiscal/incomingInvoicePayment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoicePaymentUpdate": createHandler({
      operationId: "/fiscal/incomingInvoicePaymentUpdate",
      method: "PUT",
      path: "/fiscal/incomingInvoicePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoicePaymentDelete": createHandler({
      operationId: "/fiscal/incomingInvoicePaymentDelete",
      method: "DELETE",
      path: "/fiscal/incomingInvoicePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/incomingInvoicePaymentReadById": createHandler({
      operationId: "/fiscal/incomingInvoicePaymentReadById",
      method: "GET",
      path: "/fiscal/incomingInvoicePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceItemAccountingCreate": createHandler({
      operationId: "/fiscal/invoiceItemAccountingCreate",
      method: "POST",
      path: "/fiscal/invoiceItemAccounting",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceItemAccountingRead": createHandler({
      operationId: "/fiscal/invoiceItemAccountingRead",
      method: "GET",
      path: "/fiscal/invoiceItemAccounting",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceItemAccountingUpdate": createHandler({
      operationId: "/fiscal/invoiceItemAccountingUpdate",
      method: "PUT",
      path: "/fiscal/invoiceItemAccounting",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceItemAccountingDelete": createHandler({
      operationId: "/fiscal/invoiceItemAccountingDelete",
      method: "DELETE",
      path: "/fiscal/invoiceItemAccounting/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceItemAccountingReadById": createHandler({
      operationId: "/fiscal/invoiceItemAccountingReadById",
      method: "GET",
      path: "/fiscal/invoiceItemAccounting/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceReferenceCreate": createHandler({
      operationId: "/fiscal/invoiceReferenceCreate",
      method: "POST",
      path: "/fiscal/invoiceReference",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceReferenceRead": createHandler({
      operationId: "/fiscal/invoiceReferenceRead",
      method: "GET",
      path: "/fiscal/invoiceReference",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceReferenceUpdate": createHandler({
      operationId: "/fiscal/invoiceReferenceUpdate",
      method: "PUT",
      path: "/fiscal/invoiceReference",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceReferenceDelete": createHandler({
      operationId: "/fiscal/invoiceReferenceDelete",
      method: "DELETE",
      path: "/fiscal/invoiceReference/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceReferenceReadById": createHandler({
      operationId: "/fiscal/invoiceReferenceReadById",
      method: "GET",
      path: "/fiscal/invoiceReference/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesCreate": createHandler({
      operationId: "/fiscal/invoiceSeriesCreate",
      method: "POST",
      path: "/fiscal/invoiceSeries",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesRead": createHandler({
      operationId: "/fiscal/invoiceSeriesRead",
      method: "GET",
      path: "/fiscal/invoiceSeries",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesUpdate": createHandler({
      operationId: "/fiscal/invoiceSeriesUpdate",
      method: "PUT",
      path: "/fiscal/invoiceSeries",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesDelete": createHandler({
      operationId: "/fiscal/invoiceSeriesDelete",
      method: "DELETE",
      path: "/fiscal/invoiceSeries/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesReadById": createHandler({
      operationId: "/fiscal/invoiceSeriesReadById",
      method: "GET",
      path: "/fiscal/invoiceSeries/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesOpGetNextNumber": createHandler({
      operationId: "/fiscal/invoiceSeriesOpGetNextNumber",
      method: "POST",
      path: "/fiscal/invoiceSeriesOpGetNextNumber/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/invoiceSeriesOpUpdateLastNumber": createHandler({
      operationId: "/fiscal/invoiceSeriesOpUpdateLastNumber",
      method: "POST",
      path: "/fiscal/invoiceSeriesOpUpdateLastNumber/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceCreate": createHandler({
      operationId: "/fiscal/outgoingInvoiceCreate",
      method: "POST",
      path: "/fiscal/outgoingInvoice",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceRead": createHandler({
      operationId: "/fiscal/outgoingInvoiceRead",
      method: "GET",
      path: "/fiscal/outgoingInvoice",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceUpdate": createHandler({
      operationId: "/fiscal/outgoingInvoiceUpdate",
      method: "PUT",
      path: "/fiscal/outgoingInvoice",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceDelete": createHandler({
      operationId: "/fiscal/outgoingInvoiceDelete",
      method: "DELETE",
      path: "/fiscal/outgoingInvoice/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceReadById": createHandler({
      operationId: "/fiscal/outgoingInvoiceReadById",
      method: "GET",
      path: "/fiscal/outgoingInvoice/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceItemCreate": createHandler({
      operationId: "/fiscal/outgoingInvoiceItemCreate",
      method: "POST",
      path: "/fiscal/outgoingInvoiceItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceItemRead": createHandler({
      operationId: "/fiscal/outgoingInvoiceItemRead",
      method: "GET",
      path: "/fiscal/outgoingInvoiceItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceItemUpdate": createHandler({
      operationId: "/fiscal/outgoingInvoiceItemUpdate",
      method: "PUT",
      path: "/fiscal/outgoingInvoiceItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceItemDelete": createHandler({
      operationId: "/fiscal/outgoingInvoiceItemDelete",
      method: "DELETE",
      path: "/fiscal/outgoingInvoiceItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceItemReadById": createHandler({
      operationId: "/fiscal/outgoingInvoiceItemReadById",
      method: "GET",
      path: "/fiscal/outgoingInvoiceItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpApprove": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpApprove",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpApproveRevert": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpApproveRevert",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpCancel": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpCancel",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpCancel/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpCreate": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpCreate",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpDiscount": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpDiscount",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpDiscount/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpOutgoingListBind": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpOutgoingListBind",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpOutgoingListBind/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpPrepare": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpPrepare",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpPrepareRevert": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpPrepareRevert",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpReturn": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpReturn",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpReturn/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpTaxationCalc": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpTaxationCalc",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpTaxationCalc/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoiceOpUpdatePrepared": createHandler({
      operationId: "/fiscal/outgoingInvoiceOpUpdatePrepared",
      method: "POST",
      path: "/fiscal/outgoingInvoiceOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoicePaymentCreate": createHandler({
      operationId: "/fiscal/outgoingInvoicePaymentCreate",
      method: "POST",
      path: "/fiscal/outgoingInvoicePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoicePaymentRead": createHandler({
      operationId: "/fiscal/outgoingInvoicePaymentRead",
      method: "GET",
      path: "/fiscal/outgoingInvoicePayment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoicePaymentUpdate": createHandler({
      operationId: "/fiscal/outgoingInvoicePaymentUpdate",
      method: "PUT",
      path: "/fiscal/outgoingInvoicePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoicePaymentDelete": createHandler({
      operationId: "/fiscal/outgoingInvoicePaymentDelete",
      method: "DELETE",
      path: "/fiscal/outgoingInvoicePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/outgoingInvoicePaymentReadById": createHandler({
      operationId: "/fiscal/outgoingInvoicePaymentReadById",
      method: "GET",
      path: "/fiscal/outgoingInvoicePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "fiscal/taxation": {
    "/fiscal/taxation/taxCreate": createHandler({
      operationId: "/fiscal/taxation/taxCreate",
      method: "POST",
      path: "/fiscal/taxation/tax",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxRead": createHandler({
      operationId: "/fiscal/taxation/taxRead",
      method: "GET",
      path: "/fiscal/taxation/tax",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxUpdate": createHandler({
      operationId: "/fiscal/taxation/taxUpdate",
      method: "PUT",
      path: "/fiscal/taxation/tax",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxDelete": createHandler({
      operationId: "/fiscal/taxation/taxDelete",
      method: "DELETE",
      path: "/fiscal/taxation/tax/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxReadById": createHandler({
      operationId: "/fiscal/taxation/taxReadById",
      method: "GET",
      path: "/fiscal/taxation/tax/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxOpReadByCode": createHandler({
      operationId: "/fiscal/taxation/taxOpReadByCode",
      method: "POST",
      path: "/fiscal/taxation/taxOpReadByCode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationCreate": createHandler({
      operationId: "/fiscal/taxation/taxationCreate",
      method: "POST",
      path: "/fiscal/taxation/taxation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationRead": createHandler({
      operationId: "/fiscal/taxation/taxationRead",
      method: "GET",
      path: "/fiscal/taxation/taxation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationUpdate": createHandler({
      operationId: "/fiscal/taxation/taxationUpdate",
      method: "PUT",
      path: "/fiscal/taxation/taxation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationDelete": createHandler({
      operationId: "/fiscal/taxation/taxationDelete",
      method: "DELETE",
      path: "/fiscal/taxation/taxation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationReadById": createHandler({
      operationId: "/fiscal/taxation/taxationReadById",
      method: "GET",
      path: "/fiscal/taxation/taxation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationOperationCreate": createHandler({
      operationId: "/fiscal/taxation/taxationOperationCreate",
      method: "POST",
      path: "/fiscal/taxation/taxationOperation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationOperationRead": createHandler({
      operationId: "/fiscal/taxation/taxationOperationRead",
      method: "GET",
      path: "/fiscal/taxation/taxationOperation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationOperationUpdate": createHandler({
      operationId: "/fiscal/taxation/taxationOperationUpdate",
      method: "PUT",
      path: "/fiscal/taxation/taxationOperation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationOperationDelete": createHandler({
      operationId: "/fiscal/taxation/taxationOperationDelete",
      method: "DELETE",
      path: "/fiscal/taxation/taxationOperation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationOperationReadById": createHandler({
      operationId: "/fiscal/taxation/taxationOperationReadById",
      method: "GET",
      path: "/fiscal/taxation/taxationOperation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationOperationOpReadByCode": createHandler({
      operationId: "/fiscal/taxation/taxationOperationOpReadByCode",
      method: "POST",
      path: "/fiscal/taxation/taxationOperationOpReadByCode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationRuleCreate": createHandler({
      operationId: "/fiscal/taxation/taxationRuleCreate",
      method: "POST",
      path: "/fiscal/taxation/taxationRule",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationRuleRead": createHandler({
      operationId: "/fiscal/taxation/taxationRuleRead",
      method: "GET",
      path: "/fiscal/taxation/taxationRule",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationRuleUpdate": createHandler({
      operationId: "/fiscal/taxation/taxationRuleUpdate",
      method: "PUT",
      path: "/fiscal/taxation/taxationRule",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationRuleDelete": createHandler({
      operationId: "/fiscal/taxation/taxationRuleDelete",
      method: "DELETE",
      path: "/fiscal/taxation/taxationRule/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/fiscal/taxation/taxationRuleReadById": createHandler({
      operationId: "/fiscal/taxation/taxationRuleReadById",
      method: "GET",
      path: "/fiscal/taxation/taxationRule/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "logistic": {
    "/logistic/shippingCreate": createHandler({
      operationId: "/logistic/shippingCreate",
      method: "POST",
      path: "/logistic/shipping",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingRead": createHandler({
      operationId: "/logistic/shippingRead",
      method: "GET",
      path: "/logistic/shipping",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingUpdate": createHandler({
      operationId: "/logistic/shippingUpdate",
      method: "PUT",
      path: "/logistic/shipping",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingDelete": createHandler({
      operationId: "/logistic/shippingDelete",
      method: "DELETE",
      path: "/logistic/shipping/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingReadById": createHandler({
      operationId: "/logistic/shippingReadById",
      method: "GET",
      path: "/logistic/shipping/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingItemCreate": createHandler({
      operationId: "/logistic/shippingItemCreate",
      method: "POST",
      path: "/logistic/shippingItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingItemRead": createHandler({
      operationId: "/logistic/shippingItemRead",
      method: "GET",
      path: "/logistic/shippingItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingItemUpdate": createHandler({
      operationId: "/logistic/shippingItemUpdate",
      method: "PUT",
      path: "/logistic/shippingItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingItemDelete": createHandler({
      operationId: "/logistic/shippingItemDelete",
      method: "DELETE",
      path: "/logistic/shippingItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingItemReadById": createHandler({
      operationId: "/logistic/shippingItemReadById",
      method: "GET",
      path: "/logistic/shippingItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/logistic/shippingOpApprove": createHandler({
      operationId: "/logistic/shippingOpApprove",
      method: "POST",
      path: "/logistic/shippingOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "material": {
    "/material/addressCreate": createHandler({
      operationId: "/material/addressCreate",
      method: "POST",
      path: "/material/address",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressRead": createHandler({
      operationId: "/material/addressRead",
      method: "GET",
      path: "/material/address",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressUpdate": createHandler({
      operationId: "/material/addressUpdate",
      method: "PUT",
      path: "/material/address",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressDelete": createHandler({
      operationId: "/material/addressDelete",
      method: "DELETE",
      path: "/material/address/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressReadById": createHandler({
      operationId: "/material/addressReadById",
      method: "GET",
      path: "/material/address/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressProfileCreate": createHandler({
      operationId: "/material/addressProfileCreate",
      method: "POST",
      path: "/material/addressProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressProfileRead": createHandler({
      operationId: "/material/addressProfileRead",
      method: "GET",
      path: "/material/addressProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressProfileUpdate": createHandler({
      operationId: "/material/addressProfileUpdate",
      method: "PUT",
      path: "/material/addressProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressProfileDelete": createHandler({
      operationId: "/material/addressProfileDelete",
      method: "DELETE",
      path: "/material/addressProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/addressProfileReadById": createHandler({
      operationId: "/material/addressProfileReadById",
      method: "GET",
      path: "/material/addressProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/handlingUnitCreate": createHandler({
      operationId: "/material/handlingUnitCreate",
      method: "POST",
      path: "/material/handlingUnit",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/handlingUnitRead": createHandler({
      operationId: "/material/handlingUnitRead",
      method: "GET",
      path: "/material/handlingUnit",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/handlingUnitUpdate": createHandler({
      operationId: "/material/handlingUnitUpdate",
      method: "PUT",
      path: "/material/handlingUnit",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/handlingUnitDelete": createHandler({
      operationId: "/material/handlingUnitDelete",
      method: "DELETE",
      path: "/material/handlingUnit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/handlingUnitReadById": createHandler({
      operationId: "/material/handlingUnitReadById",
      method: "GET",
      path: "/material/handlingUnit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListCreate": createHandler({
      operationId: "/material/incomingListCreate",
      method: "POST",
      path: "/material/incomingList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListRead": createHandler({
      operationId: "/material/incomingListRead",
      method: "GET",
      path: "/material/incomingList",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListUpdate": createHandler({
      operationId: "/material/incomingListUpdate",
      method: "PUT",
      path: "/material/incomingList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListDelete": createHandler({
      operationId: "/material/incomingListDelete",
      method: "DELETE",
      path: "/material/incomingList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListReadById": createHandler({
      operationId: "/material/incomingListReadById",
      method: "GET",
      path: "/material/incomingList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListItemCreate": createHandler({
      operationId: "/material/incomingListItemCreate",
      method: "POST",
      path: "/material/incomingListItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListItemRead": createHandler({
      operationId: "/material/incomingListItemRead",
      method: "GET",
      path: "/material/incomingListItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListItemUpdate": createHandler({
      operationId: "/material/incomingListItemUpdate",
      method: "PUT",
      path: "/material/incomingListItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListItemDelete": createHandler({
      operationId: "/material/incomingListItemDelete",
      method: "DELETE",
      path: "/material/incomingListItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListItemReadById": createHandler({
      operationId: "/material/incomingListItemReadById",
      method: "GET",
      path: "/material/incomingListItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListOpImportFromOutgoingList": createHandler({
      operationId: "/material/incomingListOpImportFromOutgoingList",
      method: "POST",
      path: "/material/incomingListOpImportFromOutgoingList/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListOpPrepare": createHandler({
      operationId: "/material/incomingListOpPrepare",
      method: "POST",
      path: "/material/incomingListOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/incomingListOpPrepareRevert": createHandler({
      operationId: "/material/incomingListOpPrepareRevert",
      method: "POST",
      path: "/material/incomingListOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryCreate": createHandler({
      operationId: "/material/inventoryCreate",
      method: "POST",
      path: "/material/inventory",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryRead": createHandler({
      operationId: "/material/inventoryRead",
      method: "GET",
      path: "/material/inventory",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryUpdate": createHandler({
      operationId: "/material/inventoryUpdate",
      method: "PUT",
      path: "/material/inventory",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryDelete": createHandler({
      operationId: "/material/inventoryDelete",
      method: "DELETE",
      path: "/material/inventory/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryReadById": createHandler({
      operationId: "/material/inventoryReadById",
      method: "GET",
      path: "/material/inventory/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryAdjustmentCreate": createHandler({
      operationId: "/material/inventoryAdjustmentCreate",
      method: "POST",
      path: "/material/inventoryAdjustment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryAdjustmentRead": createHandler({
      operationId: "/material/inventoryAdjustmentRead",
      method: "GET",
      path: "/material/inventoryAdjustment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryAdjustmentUpdate": createHandler({
      operationId: "/material/inventoryAdjustmentUpdate",
      method: "PUT",
      path: "/material/inventoryAdjustment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryAdjustmentDelete": createHandler({
      operationId: "/material/inventoryAdjustmentDelete",
      method: "DELETE",
      path: "/material/inventoryAdjustment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryAdjustmentReadById": createHandler({
      operationId: "/material/inventoryAdjustmentReadById",
      method: "GET",
      path: "/material/inventoryAdjustment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryAdjustmentOpCreate": createHandler({
      operationId: "/material/inventoryAdjustmentOpCreate",
      method: "POST",
      path: "/material/inventoryAdjustmentOpCreate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryCheckCreate": createHandler({
      operationId: "/material/inventoryCheckCreate",
      method: "POST",
      path: "/material/inventoryCheck",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryCheckRead": createHandler({
      operationId: "/material/inventoryCheckRead",
      method: "GET",
      path: "/material/inventoryCheck",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryCheckUpdate": createHandler({
      operationId: "/material/inventoryCheckUpdate",
      method: "PUT",
      path: "/material/inventoryCheck",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryCheckDelete": createHandler({
      operationId: "/material/inventoryCheckDelete",
      method: "DELETE",
      path: "/material/inventoryCheck/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryCheckReadById": createHandler({
      operationId: "/material/inventoryCheckReadById",
      method: "GET",
      path: "/material/inventoryCheck/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpApprove": createHandler({
      operationId: "/material/inventoryOpApprove",
      method: "POST",
      path: "/material/inventoryOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpApproveRevert": createHandler({
      operationId: "/material/inventoryOpApproveRevert",
      method: "POST",
      path: "/material/inventoryOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpFinish": createHandler({
      operationId: "/material/inventoryOpFinish",
      method: "POST",
      path: "/material/inventoryOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpFinishRevert": createHandler({
      operationId: "/material/inventoryOpFinishRevert",
      method: "POST",
      path: "/material/inventoryOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpPrepare": createHandler({
      operationId: "/material/inventoryOpPrepare",
      method: "POST",
      path: "/material/inventoryOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpPrepareRevert": createHandler({
      operationId: "/material/inventoryOpPrepareRevert",
      method: "POST",
      path: "/material/inventoryOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpProcess": createHandler({
      operationId: "/material/inventoryOpProcess",
      method: "POST",
      path: "/material/inventoryOpProcess/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpProcessRevert": createHandler({
      operationId: "/material/inventoryOpProcessRevert",
      method: "POST",
      path: "/material/inventoryOpProcessRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpStart": createHandler({
      operationId: "/material/inventoryOpStart",
      method: "POST",
      path: "/material/inventoryOpStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryOpStartRevert": createHandler({
      operationId: "/material/inventoryOpStartRevert",
      method: "POST",
      path: "/material/inventoryOpStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryProfileCreate": createHandler({
      operationId: "/material/inventoryProfileCreate",
      method: "POST",
      path: "/material/inventoryProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryProfileRead": createHandler({
      operationId: "/material/inventoryProfileRead",
      method: "GET",
      path: "/material/inventoryProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryProfileUpdate": createHandler({
      operationId: "/material/inventoryProfileUpdate",
      method: "PUT",
      path: "/material/inventoryProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryProfileDelete": createHandler({
      operationId: "/material/inventoryProfileDelete",
      method: "DELETE",
      path: "/material/inventoryProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryProfileReadById": createHandler({
      operationId: "/material/inventoryProfileReadById",
      method: "GET",
      path: "/material/inventoryProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryStockCreate": createHandler({
      operationId: "/material/inventoryStockCreate",
      method: "POST",
      path: "/material/inventoryStock",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryStockRead": createHandler({
      operationId: "/material/inventoryStockRead",
      method: "GET",
      path: "/material/inventoryStock",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryStockUpdate": createHandler({
      operationId: "/material/inventoryStockUpdate",
      method: "PUT",
      path: "/material/inventoryStock",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryStockDelete": createHandler({
      operationId: "/material/inventoryStockDelete",
      method: "DELETE",
      path: "/material/inventoryStock/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryStockReadById": createHandler({
      operationId: "/material/inventoryStockReadById",
      method: "GET",
      path: "/material/inventoryStock/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/inventoryStockOpCreate": createHandler({
      operationId: "/material/inventoryStockOpCreate",
      method: "POST",
      path: "/material/inventoryStockOpCreate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/lotCreate": createHandler({
      operationId: "/material/lotCreate",
      method: "POST",
      path: "/material/lot",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/lotRead": createHandler({
      operationId: "/material/lotRead",
      method: "GET",
      path: "/material/lot",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/lotUpdate": createHandler({
      operationId: "/material/lotUpdate",
      method: "PUT",
      path: "/material/lot",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/lotDelete": createHandler({
      operationId: "/material/lotDelete",
      method: "DELETE",
      path: "/material/lot/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/lotReadById": createHandler({
      operationId: "/material/lotReadById",
      method: "GET",
      path: "/material/lot/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderCreate": createHandler({
      operationId: "/material/movingOrderCreate",
      method: "POST",
      path: "/material/movingOrder",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderRead": createHandler({
      operationId: "/material/movingOrderRead",
      method: "GET",
      path: "/material/movingOrder",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderUpdate": createHandler({
      operationId: "/material/movingOrderUpdate",
      method: "PUT",
      path: "/material/movingOrder",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderDelete": createHandler({
      operationId: "/material/movingOrderDelete",
      method: "DELETE",
      path: "/material/movingOrder/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderReadById": createHandler({
      operationId: "/material/movingOrderReadById",
      method: "GET",
      path: "/material/movingOrder/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemRead": createHandler({
      operationId: "/material/movingOrderItemRead",
      method: "GET",
      path: "/material/movingOrderItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemUpdate": createHandler({
      operationId: "/material/movingOrderItemUpdate",
      method: "PUT",
      path: "/material/movingOrderItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemDelete": createHandler({
      operationId: "/material/movingOrderItemDelete",
      method: "DELETE",
      path: "/material/movingOrderItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemReadById": createHandler({
      operationId: "/material/movingOrderItemReadById",
      method: "GET",
      path: "/material/movingOrderItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemOpFinish": createHandler({
      operationId: "/material/movingOrderItemOpFinish",
      method: "POST",
      path: "/material/movingOrderItemOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemOpLoad": createHandler({
      operationId: "/material/movingOrderItemOpLoad",
      method: "POST",
      path: "/material/movingOrderItemOpLoad/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemOpStart": createHandler({
      operationId: "/material/movingOrderItemOpStart",
      method: "POST",
      path: "/material/movingOrderItemOpStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderItemOpStartRevert": createHandler({
      operationId: "/material/movingOrderItemOpStartRevert",
      method: "POST",
      path: "/material/movingOrderItemOpStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpAllocateStock": createHandler({
      operationId: "/material/movingOrderOpAllocateStock",
      method: "POST",
      path: "/material/movingOrderOpAllocateStock/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpApprove": createHandler({
      operationId: "/material/movingOrderOpApprove",
      method: "POST",
      path: "/material/movingOrderOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpApproveRevert": createHandler({
      operationId: "/material/movingOrderOpApproveRevert",
      method: "POST",
      path: "/material/movingOrderOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpFinish": createHandler({
      operationId: "/material/movingOrderOpFinish",
      method: "POST",
      path: "/material/movingOrderOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpPrepare": createHandler({
      operationId: "/material/movingOrderOpPrepare",
      method: "POST",
      path: "/material/movingOrderOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpPrepareRevert": createHandler({
      operationId: "/material/movingOrderOpPrepareRevert",
      method: "POST",
      path: "/material/movingOrderOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpStart": createHandler({
      operationId: "/material/movingOrderOpStart",
      method: "POST",
      path: "/material/movingOrderOpStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpStartRevert": createHandler({
      operationId: "/material/movingOrderOpStartRevert",
      method: "POST",
      path: "/material/movingOrderOpStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/movingOrderOpUnload": createHandler({
      operationId: "/material/movingOrderOpUnload",
      method: "POST",
      path: "/material/movingOrderOpUnload/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListRead": createHandler({
      operationId: "/material/outgoingListRead",
      method: "GET",
      path: "/material/outgoingList",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListDelete": createHandler({
      operationId: "/material/outgoingListDelete",
      method: "DELETE",
      path: "/material/outgoingList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListReadById": createHandler({
      operationId: "/material/outgoingListReadById",
      method: "GET",
      path: "/material/outgoingList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpCreateFromReservation": createHandler({
      operationId: "/material/outgoingListOpCreateFromReservation",
      method: "POST",
      path: "/material/outgoingListOpCreateFromReservation/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpMerge": createHandler({
      operationId: "/material/outgoingListOpMerge",
      method: "POST",
      path: "/material/outgoingListOpMerge",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpOutgoingInvoiceCreate": createHandler({
      operationId: "/material/outgoingListOpOutgoingInvoiceCreate",
      method: "POST",
      path: "/material/outgoingListOpOutgoingInvoiceCreate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpOutgoingInvoiceCreateRevert": createHandler({
      operationId: "/material/outgoingListOpOutgoingInvoiceCreateRevert",
      method: "POST",
      path: "/material/outgoingListOpOutgoingInvoiceCreateRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpPacked": createHandler({
      operationId: "/material/outgoingListOpPacked",
      method: "POST",
      path: "/material/outgoingListOpPacked/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpPackedRevert": createHandler({
      operationId: "/material/outgoingListOpPackedRevert",
      method: "POST",
      path: "/material/outgoingListOpPackedRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/outgoingListOpVolumeCreateAuto": createHandler({
      operationId: "/material/outgoingListOpVolumeCreateAuto",
      method: "POST",
      path: "/material/outgoingListOpVolumeCreateAuto/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderCreate": createHandler({
      operationId: "/material/pickingOrderCreate",
      method: "POST",
      path: "/material/pickingOrder",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderRead": createHandler({
      operationId: "/material/pickingOrderRead",
      method: "GET",
      path: "/material/pickingOrder",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderUpdate": createHandler({
      operationId: "/material/pickingOrderUpdate",
      method: "PUT",
      path: "/material/pickingOrder",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderDelete": createHandler({
      operationId: "/material/pickingOrderDelete",
      method: "DELETE",
      path: "/material/pickingOrder/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderReadById": createHandler({
      operationId: "/material/pickingOrderReadById",
      method: "GET",
      path: "/material/pickingOrder/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderItemCreate": createHandler({
      operationId: "/material/pickingOrderItemCreate",
      method: "POST",
      path: "/material/pickingOrderItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderItemRead": createHandler({
      operationId: "/material/pickingOrderItemRead",
      method: "GET",
      path: "/material/pickingOrderItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderItemUpdate": createHandler({
      operationId: "/material/pickingOrderItemUpdate",
      method: "PUT",
      path: "/material/pickingOrderItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderItemDelete": createHandler({
      operationId: "/material/pickingOrderItemDelete",
      method: "DELETE",
      path: "/material/pickingOrderItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderItemReadById": createHandler({
      operationId: "/material/pickingOrderItemReadById",
      method: "GET",
      path: "/material/pickingOrderItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpApprove": createHandler({
      operationId: "/material/pickingOrderOpApprove",
      method: "POST",
      path: "/material/pickingOrderOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpApproveRevert": createHandler({
      operationId: "/material/pickingOrderOpApproveRevert",
      method: "POST",
      path: "/material/pickingOrderOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpCreate": createHandler({
      operationId: "/material/pickingOrderOpCreate",
      method: "POST",
      path: "/material/pickingOrderOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpDistribute": createHandler({
      operationId: "/material/pickingOrderOpDistribute",
      method: "POST",
      path: "/material/pickingOrderOpDistribute/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpDistributeAuto": createHandler({
      operationId: "/material/pickingOrderOpDistributeAuto",
      method: "POST",
      path: "/material/pickingOrderOpDistributeAuto/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpDistributeRevert": createHandler({
      operationId: "/material/pickingOrderOpDistributeRevert",
      method: "POST",
      path: "/material/pickingOrderOpDistributeRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpFinish": createHandler({
      operationId: "/material/pickingOrderOpFinish",
      method: "POST",
      path: "/material/pickingOrderOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpGroup": createHandler({
      operationId: "/material/pickingOrderOpGroup",
      method: "POST",
      path: "/material/pickingOrderOpGroup",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpGroupRevert": createHandler({
      operationId: "/material/pickingOrderOpGroupRevert",
      method: "POST",
      path: "/material/pickingOrderOpGroupRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpPrepare": createHandler({
      operationId: "/material/pickingOrderOpPrepare",
      method: "POST",
      path: "/material/pickingOrderOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpPrepareRevert": createHandler({
      operationId: "/material/pickingOrderOpPrepareRevert",
      method: "POST",
      path: "/material/pickingOrderOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpReservationFinish": createHandler({
      operationId: "/material/pickingOrderOpReservationFinish",
      method: "POST",
      path: "/material/pickingOrderOpReservationFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpReservationFinishRevert": createHandler({
      operationId: "/material/pickingOrderOpReservationFinishRevert",
      method: "POST",
      path: "/material/pickingOrderOpReservationFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpUngroup": createHandler({
      operationId: "/material/pickingOrderOpUngroup",
      method: "POST",
      path: "/material/pickingOrderOpUngroup/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpUngroupDivergent": createHandler({
      operationId: "/material/pickingOrderOpUngroupDivergent",
      method: "POST",
      path: "/material/pickingOrderOpUngroupDivergent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingOrderOpUngroupRevert": createHandler({
      operationId: "/material/pickingOrderOpUngroupRevert",
      method: "POST",
      path: "/material/pickingOrderOpUngroupRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingProfileCreate": createHandler({
      operationId: "/material/pickingProfileCreate",
      method: "POST",
      path: "/material/pickingProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingProfileRead": createHandler({
      operationId: "/material/pickingProfileRead",
      method: "GET",
      path: "/material/pickingProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingProfileUpdate": createHandler({
      operationId: "/material/pickingProfileUpdate",
      method: "PUT",
      path: "/material/pickingProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingProfileDelete": createHandler({
      operationId: "/material/pickingProfileDelete",
      method: "DELETE",
      path: "/material/pickingProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/pickingProfileReadById": createHandler({
      operationId: "/material/pickingProfileReadById",
      method: "GET",
      path: "/material/pickingProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/qualityCreate": createHandler({
      operationId: "/material/qualityCreate",
      method: "POST",
      path: "/material/quality",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/qualityRead": createHandler({
      operationId: "/material/qualityRead",
      method: "GET",
      path: "/material/quality",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/qualityUpdate": createHandler({
      operationId: "/material/qualityUpdate",
      method: "PUT",
      path: "/material/quality",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/qualityDelete": createHandler({
      operationId: "/material/qualityDelete",
      method: "DELETE",
      path: "/material/quality/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/qualityReadById": createHandler({
      operationId: "/material/qualityReadById",
      method: "GET",
      path: "/material/quality/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationCreate": createHandler({
      operationId: "/material/reservationCreate",
      method: "POST",
      path: "/material/reservation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationRead": createHandler({
      operationId: "/material/reservationRead",
      method: "GET",
      path: "/material/reservation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationUpdate": createHandler({
      operationId: "/material/reservationUpdate",
      method: "PUT",
      path: "/material/reservation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationDelete": createHandler({
      operationId: "/material/reservationDelete",
      method: "DELETE",
      path: "/material/reservation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationReadById": createHandler({
      operationId: "/material/reservationReadById",
      method: "GET",
      path: "/material/reservation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationItemRead": createHandler({
      operationId: "/material/reservationItemRead",
      method: "GET",
      path: "/material/reservationItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationItemReadById": createHandler({
      operationId: "/material/reservationItemReadById",
      method: "GET",
      path: "/material/reservationItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpAllocate": createHandler({
      operationId: "/material/reservationOpAllocate",
      method: "POST",
      path: "/material/reservationOpAllocate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpAllocateAuto": createHandler({
      operationId: "/material/reservationOpAllocateAuto",
      method: "POST",
      path: "/material/reservationOpAllocateAuto/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpAllocateAutoRevert": createHandler({
      operationId: "/material/reservationOpAllocateAutoRevert",
      method: "POST",
      path: "/material/reservationOpAllocateAutoRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpAllocateRevert": createHandler({
      operationId: "/material/reservationOpAllocateRevert",
      method: "POST",
      path: "/material/reservationOpAllocateRevert/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpAllocateStock": createHandler({
      operationId: "/material/reservationOpAllocateStock",
      method: "POST",
      path: "/material/reservationOpAllocateStock/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpAllocateStockRevert": createHandler({
      operationId: "/material/reservationOpAllocateStockRevert",
      method: "POST",
      path: "/material/reservationOpAllocateStockRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpApprove": createHandler({
      operationId: "/material/reservationOpApprove",
      method: "POST",
      path: "/material/reservationOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpApproveRevert": createHandler({
      operationId: "/material/reservationOpApproveRevert",
      method: "POST",
      path: "/material/reservationOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpCreate": createHandler({
      operationId: "/material/reservationOpCreate",
      method: "POST",
      path: "/material/reservationOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpFinish": createHandler({
      operationId: "/material/reservationOpFinish",
      method: "POST",
      path: "/material/reservationOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpFinishDivergent": createHandler({
      operationId: "/material/reservationOpFinishDivergent",
      method: "POST",
      path: "/material/reservationOpFinishDivergent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpFinishRevert": createHandler({
      operationId: "/material/reservationOpFinishRevert",
      method: "POST",
      path: "/material/reservationOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpPrepare": createHandler({
      operationId: "/material/reservationOpPrepare",
      method: "POST",
      path: "/material/reservationOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpPrepareRevert": createHandler({
      operationId: "/material/reservationOpPrepareRevert",
      method: "POST",
      path: "/material/reservationOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpStart": createHandler({
      operationId: "/material/reservationOpStart",
      method: "POST",
      path: "/material/reservationOpStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationOpStartRevert": createHandler({
      operationId: "/material/reservationOpStartRevert",
      method: "POST",
      path: "/material/reservationOpStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationTargetCreate": createHandler({
      operationId: "/material/reservationTargetCreate",
      method: "POST",
      path: "/material/reservationTarget",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationTargetRead": createHandler({
      operationId: "/material/reservationTargetRead",
      method: "GET",
      path: "/material/reservationTarget",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationTargetUpdate": createHandler({
      operationId: "/material/reservationTargetUpdate",
      method: "PUT",
      path: "/material/reservationTarget",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationTargetDelete": createHandler({
      operationId: "/material/reservationTargetDelete",
      method: "DELETE",
      path: "/material/reservationTarget/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/reservationTargetReadById": createHandler({
      operationId: "/material/reservationTargetReadById",
      method: "GET",
      path: "/material/reservationTarget/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/serialCreate": createHandler({
      operationId: "/material/serialCreate",
      method: "POST",
      path: "/material/serial",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/serialRead": createHandler({
      operationId: "/material/serialRead",
      method: "GET",
      path: "/material/serial",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/serialUpdate": createHandler({
      operationId: "/material/serialUpdate",
      method: "PUT",
      path: "/material/serial",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/serialDelete": createHandler({
      operationId: "/material/serialDelete",
      method: "DELETE",
      path: "/material/serial/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/serialReadById": createHandler({
      operationId: "/material/serialReadById",
      method: "GET",
      path: "/material/serial/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockRead": createHandler({
      operationId: "/material/stockRead",
      method: "GET",
      path: "/material/stock",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockReadById": createHandler({
      operationId: "/material/stockReadById",
      method: "GET",
      path: "/material/stock/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockAvailabilityRead": createHandler({
      operationId: "/material/stockAvailabilityRead",
      method: "GET",
      path: "/material/stockAvailability",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockClusterCreate": createHandler({
      operationId: "/material/stockClusterCreate",
      method: "POST",
      path: "/material/stockCluster",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockClusterRead": createHandler({
      operationId: "/material/stockClusterRead",
      method: "GET",
      path: "/material/stockCluster",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockClusterUpdate": createHandler({
      operationId: "/material/stockClusterUpdate",
      method: "PUT",
      path: "/material/stockCluster",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockClusterDelete": createHandler({
      operationId: "/material/stockClusterDelete",
      method: "DELETE",
      path: "/material/stockCluster/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockClusterReadById": createHandler({
      operationId: "/material/stockClusterReadById",
      method: "GET",
      path: "/material/stockCluster/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementCreate": createHandler({
      operationId: "/material/stockManagementCreate",
      method: "POST",
      path: "/material/stockManagement",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementRead": createHandler({
      operationId: "/material/stockManagementRead",
      method: "GET",
      path: "/material/stockManagement",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementUpdate": createHandler({
      operationId: "/material/stockManagementUpdate",
      method: "PUT",
      path: "/material/stockManagement",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementDelete": createHandler({
      operationId: "/material/stockManagementDelete",
      method: "DELETE",
      path: "/material/stockManagement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementReadById": createHandler({
      operationId: "/material/stockManagementReadById",
      method: "GET",
      path: "/material/stockManagement/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementItemCreate": createHandler({
      operationId: "/material/stockManagementItemCreate",
      method: "POST",
      path: "/material/stockManagementItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementItemRead": createHandler({
      operationId: "/material/stockManagementItemRead",
      method: "GET",
      path: "/material/stockManagementItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementItemUpdate": createHandler({
      operationId: "/material/stockManagementItemUpdate",
      method: "PUT",
      path: "/material/stockManagementItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementItemDelete": createHandler({
      operationId: "/material/stockManagementItemDelete",
      method: "DELETE",
      path: "/material/stockManagementItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementItemReadById": createHandler({
      operationId: "/material/stockManagementItemReadById",
      method: "GET",
      path: "/material/stockManagementItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementOpImport": createHandler({
      operationId: "/material/stockManagementOpImport",
      method: "POST",
      path: "/material/stockManagementOpImport",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockManagementOpUpdateAverageDailyConsumption": createHandler({
      operationId: "/material/stockManagementOpUpdateAverageDailyConsumption",
      method: "POST",
      path: "/material/stockManagementOpUpdateAverageDailyConsumption",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockOpBarcode": createHandler({
      operationId: "/material/stockOpBarcode",
      method: "POST",
      path: "/material/stockOpBarcode",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockOpCompensate": createHandler({
      operationId: "/material/stockOpCompensate",
      method: "POST",
      path: "/material/stockOpCompensate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockOpUpdate": createHandler({
      operationId: "/material/stockOpUpdate",
      method: "POST",
      path: "/material/stockOpUpdate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockTransactionRead": createHandler({
      operationId: "/material/stockTransactionRead",
      method: "GET",
      path: "/material/stockTransaction",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockTransactionReadById": createHandler({
      operationId: "/material/stockTransactionReadById",
      method: "GET",
      path: "/material/stockTransaction/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/stockTransactionOpRevert": createHandler({
      operationId: "/material/stockTransactionOpRevert",
      method: "POST",
      path: "/material/stockTransactionOpRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeCreate": createHandler({
      operationId: "/material/volumeCreate",
      method: "POST",
      path: "/material/volume",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeRead": createHandler({
      operationId: "/material/volumeRead",
      method: "GET",
      path: "/material/volume",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeUpdate": createHandler({
      operationId: "/material/volumeUpdate",
      method: "PUT",
      path: "/material/volume",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeDelete": createHandler({
      operationId: "/material/volumeDelete",
      method: "DELETE",
      path: "/material/volume/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeReadById": createHandler({
      operationId: "/material/volumeReadById",
      method: "GET",
      path: "/material/volume/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeItemCreate": createHandler({
      operationId: "/material/volumeItemCreate",
      method: "POST",
      path: "/material/volumeItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeItemRead": createHandler({
      operationId: "/material/volumeItemRead",
      method: "GET",
      path: "/material/volumeItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeItemDelete": createHandler({
      operationId: "/material/volumeItemDelete",
      method: "DELETE",
      path: "/material/volumeItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeItemReadById": createHandler({
      operationId: "/material/volumeItemReadById",
      method: "GET",
      path: "/material/volumeItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeOpCheck": createHandler({
      operationId: "/material/volumeOpCheck",
      method: "POST",
      path: "/material/volumeOpCheck/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeOpCheckRevert": createHandler({
      operationId: "/material/volumeOpCheckRevert",
      method: "POST",
      path: "/material/volumeOpCheckRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeOpCreate": createHandler({
      operationId: "/material/volumeOpCreate",
      method: "POST",
      path: "/material/volumeOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/volumeOpHandlingUnitSet": createHandler({
      operationId: "/material/volumeOpHandlingUnitSet",
      method: "POST",
      path: "/material/volumeOpHandlingUnitSet/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/warehouseCreate": createHandler({
      operationId: "/material/warehouseCreate",
      method: "POST",
      path: "/material/warehouse",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/warehouseRead": createHandler({
      operationId: "/material/warehouseRead",
      method: "GET",
      path: "/material/warehouse",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/warehouseUpdate": createHandler({
      operationId: "/material/warehouseUpdate",
      method: "PUT",
      path: "/material/warehouse",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/warehouseDelete": createHandler({
      operationId: "/material/warehouseDelete",
      method: "DELETE",
      path: "/material/warehouse/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/material/warehouseReadById": createHandler({
      operationId: "/material/warehouseReadById",
      method: "GET",
      path: "/material/warehouse/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "sale": {
    "/sale/priceFormationCreate": createHandler({
      operationId: "/sale/priceFormationCreate",
      method: "POST",
      path: "/sale/priceFormation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationRead": createHandler({
      operationId: "/sale/priceFormationRead",
      method: "GET",
      path: "/sale/priceFormation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationUpdate": createHandler({
      operationId: "/sale/priceFormationUpdate",
      method: "PUT",
      path: "/sale/priceFormation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationDelete": createHandler({
      operationId: "/sale/priceFormationDelete",
      method: "DELETE",
      path: "/sale/priceFormation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationReadById": createHandler({
      operationId: "/sale/priceFormationReadById",
      method: "GET",
      path: "/sale/priceFormation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationItemCreate": createHandler({
      operationId: "/sale/priceFormationItemCreate",
      method: "POST",
      path: "/sale/priceFormationItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationItemRead": createHandler({
      operationId: "/sale/priceFormationItemRead",
      method: "GET",
      path: "/sale/priceFormationItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationItemUpdate": createHandler({
      operationId: "/sale/priceFormationItemUpdate",
      method: "PUT",
      path: "/sale/priceFormationItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationItemDelete": createHandler({
      operationId: "/sale/priceFormationItemDelete",
      method: "DELETE",
      path: "/sale/priceFormationItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationItemReadById": createHandler({
      operationId: "/sale/priceFormationItemReadById",
      method: "GET",
      path: "/sale/priceFormationItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationOpCalculate": createHandler({
      operationId: "/sale/priceFormationOpCalculate",
      method: "POST",
      path: "/sale/priceFormationOpCalculate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationOpClone": createHandler({
      operationId: "/sale/priceFormationOpClone",
      method: "POST",
      path: "/sale/priceFormationOpClone/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceFormationOpSimulation": createHandler({
      operationId: "/sale/priceFormationOpSimulation",
      method: "POST",
      path: "/sale/priceFormationOpSimulation/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListCreate": createHandler({
      operationId: "/sale/priceListCreate",
      method: "POST",
      path: "/sale/priceList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListRead": createHandler({
      operationId: "/sale/priceListRead",
      method: "GET",
      path: "/sale/priceList",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListUpdate": createHandler({
      operationId: "/sale/priceListUpdate",
      method: "PUT",
      path: "/sale/priceList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListDelete": createHandler({
      operationId: "/sale/priceListDelete",
      method: "DELETE",
      path: "/sale/priceList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListReadById": createHandler({
      operationId: "/sale/priceListReadById",
      method: "GET",
      path: "/sale/priceList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListItemCreate": createHandler({
      operationId: "/sale/priceListItemCreate",
      method: "POST",
      path: "/sale/priceListItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListItemRead": createHandler({
      operationId: "/sale/priceListItemRead",
      method: "GET",
      path: "/sale/priceListItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListItemUpdate": createHandler({
      operationId: "/sale/priceListItemUpdate",
      method: "PUT",
      path: "/sale/priceListItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListItemDelete": createHandler({
      operationId: "/sale/priceListItemDelete",
      method: "DELETE",
      path: "/sale/priceListItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/priceListItemReadById": createHandler({
      operationId: "/sale/priceListItemReadById",
      method: "GET",
      path: "/sale/priceListItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteCreate": createHandler({
      operationId: "/sale/quoteCreate",
      method: "POST",
      path: "/sale/quote",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteRead": createHandler({
      operationId: "/sale/quoteRead",
      method: "GET",
      path: "/sale/quote",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteUpdate": createHandler({
      operationId: "/sale/quoteUpdate",
      method: "PUT",
      path: "/sale/quote",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteDelete": createHandler({
      operationId: "/sale/quoteDelete",
      method: "DELETE",
      path: "/sale/quote/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteReadById": createHandler({
      operationId: "/sale/quoteReadById",
      method: "GET",
      path: "/sale/quote/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemCreate": createHandler({
      operationId: "/sale/quoteItemCreate",
      method: "POST",
      path: "/sale/quoteItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemRead": createHandler({
      operationId: "/sale/quoteItemRead",
      method: "GET",
      path: "/sale/quoteItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemUpdate": createHandler({
      operationId: "/sale/quoteItemUpdate",
      method: "PUT",
      path: "/sale/quoteItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemDelete": createHandler({
      operationId: "/sale/quoteItemDelete",
      method: "DELETE",
      path: "/sale/quoteItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemReadById": createHandler({
      operationId: "/sale/quoteItemReadById",
      method: "GET",
      path: "/sale/quoteItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemOpReject": createHandler({
      operationId: "/sale/quoteItemOpReject",
      method: "POST",
      path: "/sale/quoteItemOpReject/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemOpRejectRevert": createHandler({
      operationId: "/sale/quoteItemOpRejectRevert",
      method: "POST",
      path: "/sale/quoteItemOpRejectRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalCreate": createHandler({
      operationId: "/sale/quoteItemProposalCreate",
      method: "POST",
      path: "/sale/quoteItemProposal",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalRead": createHandler({
      operationId: "/sale/quoteItemProposalRead",
      method: "GET",
      path: "/sale/quoteItemProposal",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalUpdate": createHandler({
      operationId: "/sale/quoteItemProposalUpdate",
      method: "PUT",
      path: "/sale/quoteItemProposal",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalDelete": createHandler({
      operationId: "/sale/quoteItemProposalDelete",
      method: "DELETE",
      path: "/sale/quoteItemProposal/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalReadById": createHandler({
      operationId: "/sale/quoteItemProposalReadById",
      method: "GET",
      path: "/sale/quoteItemProposal/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalOpApprove": createHandler({
      operationId: "/sale/quoteItemProposalOpApprove",
      method: "POST",
      path: "/sale/quoteItemProposalOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalOpApproveRevert": createHandler({
      operationId: "/sale/quoteItemProposalOpApproveRevert",
      method: "POST",
      path: "/sale/quoteItemProposalOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalOpReject": createHandler({
      operationId: "/sale/quoteItemProposalOpReject",
      method: "POST",
      path: "/sale/quoteItemProposalOpReject/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteItemProposalOpRejectRevert": createHandler({
      operationId: "/sale/quoteItemProposalOpRejectRevert",
      method: "POST",
      path: "/sale/quoteItemProposalOpRejectRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpApprove": createHandler({
      operationId: "/sale/quoteOpApprove",
      method: "POST",
      path: "/sale/quoteOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpApproveRevert": createHandler({
      operationId: "/sale/quoteOpApproveRevert",
      method: "POST",
      path: "/sale/quoteOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpCancel": createHandler({
      operationId: "/sale/quoteOpCancel",
      method: "POST",
      path: "/sale/quoteOpCancel/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpCancelRevert": createHandler({
      operationId: "/sale/quoteOpCancelRevert",
      method: "POST",
      path: "/sale/quoteOpCancelRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpCreate": createHandler({
      operationId: "/sale/quoteOpCreate",
      method: "POST",
      path: "/sale/quoteOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpFill": createHandler({
      operationId: "/sale/quoteOpFill",
      method: "POST",
      path: "/sale/quoteOpFill/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpFillRevert": createHandler({
      operationId: "/sale/quoteOpFillRevert",
      method: "POST",
      path: "/sale/quoteOpFillRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpPrepare": createHandler({
      operationId: "/sale/quoteOpPrepare",
      method: "POST",
      path: "/sale/quoteOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpPrepareRevert": createHandler({
      operationId: "/sale/quoteOpPrepareRevert",
      method: "POST",
      path: "/sale/quoteOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpReject": createHandler({
      operationId: "/sale/quoteOpReject",
      method: "POST",
      path: "/sale/quoteOpReject/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpRejectRevert": createHandler({
      operationId: "/sale/quoteOpRejectRevert",
      method: "POST",
      path: "/sale/quoteOpRejectRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpStart": createHandler({
      operationId: "/sale/quoteOpStart",
      method: "POST",
      path: "/sale/quoteOpStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpStartRevert": createHandler({
      operationId: "/sale/quoteOpStartRevert",
      method: "POST",
      path: "/sale/quoteOpStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpSubmit": createHandler({
      operationId: "/sale/quoteOpSubmit",
      method: "POST",
      path: "/sale/quoteOpSubmit/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/quoteOpSubmitRevert": createHandler({
      operationId: "/sale/quoteOpSubmitRevert",
      method: "POST",
      path: "/sale/quoteOpSubmitRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleCreate": createHandler({
      operationId: "/sale/saleCreate",
      method: "POST",
      path: "/sale/sale",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleRead": createHandler({
      operationId: "/sale/saleRead",
      method: "GET",
      path: "/sale/sale",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleUpdate": createHandler({
      operationId: "/sale/saleUpdate",
      method: "PUT",
      path: "/sale/sale",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleDelete": createHandler({
      operationId: "/sale/saleDelete",
      method: "DELETE",
      path: "/sale/sale/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleReadById": createHandler({
      operationId: "/sale/saleReadById",
      method: "GET",
      path: "/sale/sale/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleItemCreate": createHandler({
      operationId: "/sale/saleItemCreate",
      method: "POST",
      path: "/sale/saleItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleItemRead": createHandler({
      operationId: "/sale/saleItemRead",
      method: "GET",
      path: "/sale/saleItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleItemUpdate": createHandler({
      operationId: "/sale/saleItemUpdate",
      method: "PUT",
      path: "/sale/saleItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleItemDelete": createHandler({
      operationId: "/sale/saleItemDelete",
      method: "DELETE",
      path: "/sale/saleItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleItemReadById": createHandler({
      operationId: "/sale/saleItemReadById",
      method: "GET",
      path: "/sale/saleItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleItemOpUpdatePrepared": createHandler({
      operationId: "/sale/saleItemOpUpdatePrepared",
      method: "POST",
      path: "/sale/saleItemOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpApprove": createHandler({
      operationId: "/sale/saleOpApprove",
      method: "POST",
      path: "/sale/saleOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpApproveRevert": createHandler({
      operationId: "/sale/saleOpApproveRevert",
      method: "POST",
      path: "/sale/saleOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpApproveUnconditionally": createHandler({
      operationId: "/sale/saleOpApproveUnconditionally",
      method: "POST",
      path: "/sale/saleOpApproveUnconditionally/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpCancel": createHandler({
      operationId: "/sale/saleOpCancel",
      method: "POST",
      path: "/sale/saleOpCancel/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpCancelRevert": createHandler({
      operationId: "/sale/saleOpCancelRevert",
      method: "POST",
      path: "/sale/saleOpCancelRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpClone": createHandler({
      operationId: "/sale/saleOpClone",
      method: "POST",
      path: "/sale/saleOpClone/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpCreate": createHandler({
      operationId: "/sale/saleOpCreate",
      method: "POST",
      path: "/sale/saleOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpFinishRevert": createHandler({
      operationId: "/sale/saleOpFinishRevert",
      method: "POST",
      path: "/sale/saleOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpForwardAuto": createHandler({
      operationId: "/sale/saleOpForwardAuto",
      method: "POST",
      path: "/sale/saleOpForwardAuto/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpMerge": createHandler({
      operationId: "/sale/saleOpMerge",
      method: "POST",
      path: "/sale/saleOpMerge",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpMergeRevert": createHandler({
      operationId: "/sale/saleOpMergeRevert",
      method: "POST",
      path: "/sale/saleOpMergeRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpPickingOrderCreate": createHandler({
      operationId: "/sale/saleOpPickingOrderCreate",
      method: "POST",
      path: "/sale/saleOpPickingOrderCreate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpPickingOrderCreateRevert": createHandler({
      operationId: "/sale/saleOpPickingOrderCreateRevert",
      method: "POST",
      path: "/sale/saleOpPickingOrderCreateRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpPrepare": createHandler({
      operationId: "/sale/saleOpPrepare",
      method: "POST",
      path: "/sale/saleOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpPrepareRevert": createHandler({
      operationId: "/sale/saleOpPrepareRevert",
      method: "POST",
      path: "/sale/saleOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpShipmentAssign": createHandler({
      operationId: "/sale/saleOpShipmentAssign",
      method: "POST",
      path: "/sale/saleOpShipmentAssign/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpShipmentAssignRevert": createHandler({
      operationId: "/sale/saleOpShipmentAssignRevert",
      method: "POST",
      path: "/sale/saleOpShipmentAssignRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpSplit": createHandler({
      operationId: "/sale/saleOpSplit",
      method: "POST",
      path: "/sale/saleOpSplit/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpTaxationCalc": createHandler({
      operationId: "/sale/saleOpTaxationCalc",
      method: "POST",
      path: "/sale/saleOpTaxationCalc/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleOpUpdatePrepared": createHandler({
      operationId: "/sale/saleOpUpdatePrepared",
      method: "POST",
      path: "/sale/saleOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/salePaymentCreate": createHandler({
      operationId: "/sale/salePaymentCreate",
      method: "POST",
      path: "/sale/salePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/salePaymentRead": createHandler({
      operationId: "/sale/salePaymentRead",
      method: "GET",
      path: "/sale/salePayment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/salePaymentUpdate": createHandler({
      operationId: "/sale/salePaymentUpdate",
      method: "PUT",
      path: "/sale/salePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/salePaymentDelete": createHandler({
      operationId: "/sale/salePaymentDelete",
      method: "DELETE",
      path: "/sale/salePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/salePaymentReadById": createHandler({
      operationId: "/sale/salePaymentReadById",
      method: "GET",
      path: "/sale/salePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleProfileCreate": createHandler({
      operationId: "/sale/saleProfileCreate",
      method: "POST",
      path: "/sale/saleProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleProfileRead": createHandler({
      operationId: "/sale/saleProfileRead",
      method: "GET",
      path: "/sale/saleProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleProfileUpdate": createHandler({
      operationId: "/sale/saleProfileUpdate",
      method: "PUT",
      path: "/sale/saleProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleProfileDelete": createHandler({
      operationId: "/sale/saleProfileDelete",
      method: "DELETE",
      path: "/sale/saleProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/sale/saleProfileReadById": createHandler({
      operationId: "/sale/saleProfileReadById",
      method: "GET",
      path: "/sale/saleProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "shipping": {
    "/shipping/shipmentCreate": createHandler({
      operationId: "/shipping/shipmentCreate",
      method: "POST",
      path: "/shipping/shipment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentRead": createHandler({
      operationId: "/shipping/shipmentRead",
      method: "GET",
      path: "/shipping/shipment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentUpdate": createHandler({
      operationId: "/shipping/shipmentUpdate",
      method: "PUT",
      path: "/shipping/shipment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentDelete": createHandler({
      operationId: "/shipping/shipmentDelete",
      method: "DELETE",
      path: "/shipping/shipment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentReadById": createHandler({
      operationId: "/shipping/shipmentReadById",
      method: "GET",
      path: "/shipping/shipment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpApprove": createHandler({
      operationId: "/shipping/shipmentOpApprove",
      method: "POST",
      path: "/shipping/shipmentOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpApproveRevert": createHandler({
      operationId: "/shipping/shipmentOpApproveRevert",
      method: "POST",
      path: "/shipping/shipmentOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpCheckFinish": createHandler({
      operationId: "/shipping/shipmentOpCheckFinish",
      method: "POST",
      path: "/shipping/shipmentOpCheckFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpCheckFinishRevert": createHandler({
      operationId: "/shipping/shipmentOpCheckFinishRevert",
      method: "POST",
      path: "/shipping/shipmentOpCheckFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpCheckIgnore": createHandler({
      operationId: "/shipping/shipmentOpCheckIgnore",
      method: "POST",
      path: "/shipping/shipmentOpCheckIgnore/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpCheckStart": createHandler({
      operationId: "/shipping/shipmentOpCheckStart",
      method: "POST",
      path: "/shipping/shipmentOpCheckStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpCheckStartRevert": createHandler({
      operationId: "/shipping/shipmentOpCheckStartRevert",
      method: "POST",
      path: "/shipping/shipmentOpCheckStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpFinish": createHandler({
      operationId: "/shipping/shipmentOpFinish",
      method: "POST",
      path: "/shipping/shipmentOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpFinishRevert": createHandler({
      operationId: "/shipping/shipmentOpFinishRevert",
      method: "POST",
      path: "/shipping/shipmentOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpLoadIgnore": createHandler({
      operationId: "/shipping/shipmentOpLoadIgnore",
      method: "POST",
      path: "/shipping/shipmentOpLoadIgnore/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpLoadStart": createHandler({
      operationId: "/shipping/shipmentOpLoadStart",
      method: "POST",
      path: "/shipping/shipmentOpLoadStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpLoadStartRevert": createHandler({
      operationId: "/shipping/shipmentOpLoadStartRevert",
      method: "POST",
      path: "/shipping/shipmentOpLoadStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpLoadVolume": createHandler({
      operationId: "/shipping/shipmentOpLoadVolume",
      method: "POST",
      path: "/shipping/shipmentOpLoadVolume/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpOutgoingInvoiceBind": createHandler({
      operationId: "/shipping/shipmentOpOutgoingInvoiceBind",
      method: "POST",
      path: "/shipping/shipmentOpOutgoingInvoiceBind/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpOutgoingInvoiceBindRevert": createHandler({
      operationId: "/shipping/shipmentOpOutgoingInvoiceBindRevert",
      method: "POST",
      path: "/shipping/shipmentOpOutgoingInvoiceBindRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpPrepare": createHandler({
      operationId: "/shipping/shipmentOpPrepare",
      method: "POST",
      path: "/shipping/shipmentOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/shipping/shipmentOpPrepareRevert": createHandler({
      operationId: "/shipping/shipmentOpPrepareRevert",
      method: "POST",
      path: "/shipping/shipmentOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "supply/production": {
    "/supply/production/bomCreate": createHandler({
      operationId: "/supply/production/bomCreate",
      method: "POST",
      path: "/supply/production/bom",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomRead": createHandler({
      operationId: "/supply/production/bomRead",
      method: "GET",
      path: "/supply/production/bom",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomUpdate": createHandler({
      operationId: "/supply/production/bomUpdate",
      method: "PUT",
      path: "/supply/production/bom",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomDelete": createHandler({
      operationId: "/supply/production/bomDelete",
      method: "DELETE",
      path: "/supply/production/bom/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomReadById": createHandler({
      operationId: "/supply/production/bomReadById",
      method: "GET",
      path: "/supply/production/bom/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomItemCreate": createHandler({
      operationId: "/supply/production/bomItemCreate",
      method: "POST",
      path: "/supply/production/bomItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomItemRead": createHandler({
      operationId: "/supply/production/bomItemRead",
      method: "GET",
      path: "/supply/production/bomItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomItemUpdate": createHandler({
      operationId: "/supply/production/bomItemUpdate",
      method: "PUT",
      path: "/supply/production/bomItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomItemDelete": createHandler({
      operationId: "/supply/production/bomItemDelete",
      method: "DELETE",
      path: "/supply/production/bomItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomItemReadById": createHandler({
      operationId: "/supply/production/bomItemReadById",
      method: "GET",
      path: "/supply/production/bomItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/bomOpClone": createHandler({
      operationId: "/supply/production/bomOpClone",
      method: "POST",
      path: "/supply/production/bomOpClone/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationCreate": createHandler({
      operationId: "/supply/production/operationCreate",
      method: "POST",
      path: "/supply/production/operation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationRead": createHandler({
      operationId: "/supply/production/operationRead",
      method: "GET",
      path: "/supply/production/operation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationUpdate": createHandler({
      operationId: "/supply/production/operationUpdate",
      method: "PUT",
      path: "/supply/production/operation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationDelete": createHandler({
      operationId: "/supply/production/operationDelete",
      method: "DELETE",
      path: "/supply/production/operation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationReadById": createHandler({
      operationId: "/supply/production/operationReadById",
      method: "GET",
      path: "/supply/production/operation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeCreate": createHandler({
      operationId: "/supply/production/operationTypeCreate",
      method: "POST",
      path: "/supply/production/operationType",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeRead": createHandler({
      operationId: "/supply/production/operationTypeRead",
      method: "GET",
      path: "/supply/production/operationType",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeUpdate": createHandler({
      operationId: "/supply/production/operationTypeUpdate",
      method: "PUT",
      path: "/supply/production/operationType",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeDelete": createHandler({
      operationId: "/supply/production/operationTypeDelete",
      method: "DELETE",
      path: "/supply/production/operationType/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeReadById": createHandler({
      operationId: "/supply/production/operationTypeReadById",
      method: "GET",
      path: "/supply/production/operationType/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeAccountCreate": createHandler({
      operationId: "/supply/production/operationTypeAccountCreate",
      method: "POST",
      path: "/supply/production/operationTypeAccount",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeAccountRead": createHandler({
      operationId: "/supply/production/operationTypeAccountRead",
      method: "GET",
      path: "/supply/production/operationTypeAccount",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeAccountUpdate": createHandler({
      operationId: "/supply/production/operationTypeAccountUpdate",
      method: "PUT",
      path: "/supply/production/operationTypeAccount",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeAccountDelete": createHandler({
      operationId: "/supply/production/operationTypeAccountDelete",
      method: "DELETE",
      path: "/supply/production/operationTypeAccount/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/operationTypeAccountReadById": createHandler({
      operationId: "/supply/production/operationTypeAccountReadById",
      method: "GET",
      path: "/supply/production/operationTypeAccount/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchCreate": createHandler({
      operationId: "/supply/production/productionBatchCreate",
      method: "POST",
      path: "/supply/production/productionBatch",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchRead": createHandler({
      operationId: "/supply/production/productionBatchRead",
      method: "GET",
      path: "/supply/production/productionBatch",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchUpdate": createHandler({
      operationId: "/supply/production/productionBatchUpdate",
      method: "PUT",
      path: "/supply/production/productionBatch",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchDelete": createHandler({
      operationId: "/supply/production/productionBatchDelete",
      method: "DELETE",
      path: "/supply/production/productionBatch/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchReadById": createHandler({
      operationId: "/supply/production/productionBatchReadById",
      method: "GET",
      path: "/supply/production/productionBatch/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchOpApprove": createHandler({
      operationId: "/supply/production/productionBatchOpApprove",
      method: "POST",
      path: "/supply/production/productionBatchOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchOpApproveRevert": createHandler({
      operationId: "/supply/production/productionBatchOpApproveRevert",
      method: "POST",
      path: "/supply/production/productionBatchOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchOpPrepare": createHandler({
      operationId: "/supply/production/productionBatchOpPrepare",
      method: "POST",
      path: "/supply/production/productionBatchOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionBatchOpPrepareRevert": createHandler({
      operationId: "/supply/production/productionBatchOpPrepareRevert",
      method: "POST",
      path: "/supply/production/productionBatchOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderCreate": createHandler({
      operationId: "/supply/production/productionOrderCreate",
      method: "POST",
      path: "/supply/production/productionOrder",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderRead": createHandler({
      operationId: "/supply/production/productionOrderRead",
      method: "GET",
      path: "/supply/production/productionOrder",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderUpdate": createHandler({
      operationId: "/supply/production/productionOrderUpdate",
      method: "PUT",
      path: "/supply/production/productionOrder",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderDelete": createHandler({
      operationId: "/supply/production/productionOrderDelete",
      method: "DELETE",
      path: "/supply/production/productionOrder/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderReadById": createHandler({
      operationId: "/supply/production/productionOrderReadById",
      method: "GET",
      path: "/supply/production/productionOrder/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpApprove": createHandler({
      operationId: "/supply/production/productionOrderOpApprove",
      method: "POST",
      path: "/supply/production/productionOrderOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpApproveRevert": createHandler({
      operationId: "/supply/production/productionOrderOpApproveRevert",
      method: "POST",
      path: "/supply/production/productionOrderOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpCreate": createHandler({
      operationId: "/supply/production/productionOrderOpCreate",
      method: "POST",
      path: "/supply/production/productionOrderOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpFinish": createHandler({
      operationId: "/supply/production/productionOrderOpFinish",
      method: "POST",
      path: "/supply/production/productionOrderOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpFinishRevert": createHandler({
      operationId: "/supply/production/productionOrderOpFinishRevert",
      method: "POST",
      path: "/supply/production/productionOrderOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpPrepare": createHandler({
      operationId: "/supply/production/productionOrderOpPrepare",
      method: "POST",
      path: "/supply/production/productionOrderOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionOrderOpPrepareRevert": createHandler({
      operationId: "/supply/production/productionOrderOpPrepareRevert",
      method: "POST",
      path: "/supply/production/productionOrderOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionProfileCreate": createHandler({
      operationId: "/supply/production/productionProfileCreate",
      method: "POST",
      path: "/supply/production/productionProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionProfileRead": createHandler({
      operationId: "/supply/production/productionProfileRead",
      method: "GET",
      path: "/supply/production/productionProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionProfileUpdate": createHandler({
      operationId: "/supply/production/productionProfileUpdate",
      method: "PUT",
      path: "/supply/production/productionProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionProfileDelete": createHandler({
      operationId: "/supply/production/productionProfileDelete",
      method: "DELETE",
      path: "/supply/production/productionProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionProfileReadById": createHandler({
      operationId: "/supply/production/productionProfileReadById",
      method: "GET",
      path: "/supply/production/productionProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepCreate": createHandler({
      operationId: "/supply/production/productionStepCreate",
      method: "POST",
      path: "/supply/production/productionStep",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepRead": createHandler({
      operationId: "/supply/production/productionStepRead",
      method: "GET",
      path: "/supply/production/productionStep",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepUpdate": createHandler({
      operationId: "/supply/production/productionStepUpdate",
      method: "PUT",
      path: "/supply/production/productionStep",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepDelete": createHandler({
      operationId: "/supply/production/productionStepDelete",
      method: "DELETE",
      path: "/supply/production/productionStep/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepReadById": createHandler({
      operationId: "/supply/production/productionStepReadById",
      method: "GET",
      path: "/supply/production/productionStep/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepConsumptionCreate": createHandler({
      operationId: "/supply/production/productionStepConsumptionCreate",
      method: "POST",
      path: "/supply/production/productionStepConsumption",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepConsumptionRead": createHandler({
      operationId: "/supply/production/productionStepConsumptionRead",
      method: "GET",
      path: "/supply/production/productionStepConsumption",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepConsumptionUpdate": createHandler({
      operationId: "/supply/production/productionStepConsumptionUpdate",
      method: "PUT",
      path: "/supply/production/productionStepConsumption",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepConsumptionDelete": createHandler({
      operationId: "/supply/production/productionStepConsumptionDelete",
      method: "DELETE",
      path: "/supply/production/productionStepConsumption/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepConsumptionReadById": createHandler({
      operationId: "/supply/production/productionStepConsumptionReadById",
      method: "GET",
      path: "/supply/production/productionStepConsumption/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepConsumptionOpCalculate": createHandler({
      operationId: "/supply/production/productionStepConsumptionOpCalculate",
      method: "POST",
      path: "/supply/production/productionStepConsumptionOpCalculate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepOpCreate": createHandler({
      operationId: "/supply/production/productionStepOpCreate",
      method: "POST",
      path: "/supply/production/productionStepOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepOpFinish": createHandler({
      operationId: "/supply/production/productionStepOpFinish",
      method: "POST",
      path: "/supply/production/productionStepOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepOpFinishRevert": createHandler({
      operationId: "/supply/production/productionStepOpFinishRevert",
      method: "POST",
      path: "/supply/production/productionStepOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepOpStart": createHandler({
      operationId: "/supply/production/productionStepOpStart",
      method: "POST",
      path: "/supply/production/productionStepOpStart/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepOpStartRevert": createHandler({
      operationId: "/supply/production/productionStepOpStartRevert",
      method: "POST",
      path: "/supply/production/productionStepOpStartRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepProductionCreate": createHandler({
      operationId: "/supply/production/productionStepProductionCreate",
      method: "POST",
      path: "/supply/production/productionStepProduction",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepProductionRead": createHandler({
      operationId: "/supply/production/productionStepProductionRead",
      method: "GET",
      path: "/supply/production/productionStepProduction",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepProductionUpdate": createHandler({
      operationId: "/supply/production/productionStepProductionUpdate",
      method: "PUT",
      path: "/supply/production/productionStepProduction",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepProductionDelete": createHandler({
      operationId: "/supply/production/productionStepProductionDelete",
      method: "DELETE",
      path: "/supply/production/productionStepProduction/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/production/productionStepProductionReadById": createHandler({
      operationId: "/supply/production/productionStepProductionReadById",
      method: "GET",
      path: "/supply/production/productionStepProduction/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "supply/purchase": {
    "/supply/purchase/priceListCreate": createHandler({
      operationId: "/supply/purchase/priceListCreate",
      method: "POST",
      path: "/supply/purchase/priceList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListRead": createHandler({
      operationId: "/supply/purchase/priceListRead",
      method: "GET",
      path: "/supply/purchase/priceList",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListUpdate": createHandler({
      operationId: "/supply/purchase/priceListUpdate",
      method: "PUT",
      path: "/supply/purchase/priceList",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListDelete": createHandler({
      operationId: "/supply/purchase/priceListDelete",
      method: "DELETE",
      path: "/supply/purchase/priceList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListReadById": createHandler({
      operationId: "/supply/purchase/priceListReadById",
      method: "GET",
      path: "/supply/purchase/priceList/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListItemCreate": createHandler({
      operationId: "/supply/purchase/priceListItemCreate",
      method: "POST",
      path: "/supply/purchase/priceListItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListItemRead": createHandler({
      operationId: "/supply/purchase/priceListItemRead",
      method: "GET",
      path: "/supply/purchase/priceListItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListItemUpdate": createHandler({
      operationId: "/supply/purchase/priceListItemUpdate",
      method: "PUT",
      path: "/supply/purchase/priceListItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListItemDelete": createHandler({
      operationId: "/supply/purchase/priceListItemDelete",
      method: "DELETE",
      path: "/supply/purchase/priceListItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/priceListItemReadById": createHandler({
      operationId: "/supply/purchase/priceListItemReadById",
      method: "GET",
      path: "/supply/purchase/priceListItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalCreate": createHandler({
      operationId: "/supply/purchase/proposalCreate",
      method: "POST",
      path: "/supply/purchase/proposal",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalRead": createHandler({
      operationId: "/supply/purchase/proposalRead",
      method: "GET",
      path: "/supply/purchase/proposal",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalUpdate": createHandler({
      operationId: "/supply/purchase/proposalUpdate",
      method: "PUT",
      path: "/supply/purchase/proposal",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalDelete": createHandler({
      operationId: "/supply/purchase/proposalDelete",
      method: "DELETE",
      path: "/supply/purchase/proposal/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalReadById": createHandler({
      operationId: "/supply/purchase/proposalReadById",
      method: "GET",
      path: "/supply/purchase/proposal/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemCreate": createHandler({
      operationId: "/supply/purchase/proposalItemCreate",
      method: "POST",
      path: "/supply/purchase/proposalItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemRead": createHandler({
      operationId: "/supply/purchase/proposalItemRead",
      method: "GET",
      path: "/supply/purchase/proposalItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemUpdate": createHandler({
      operationId: "/supply/purchase/proposalItemUpdate",
      method: "PUT",
      path: "/supply/purchase/proposalItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemDelete": createHandler({
      operationId: "/supply/purchase/proposalItemDelete",
      method: "DELETE",
      path: "/supply/purchase/proposalItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemReadById": createHandler({
      operationId: "/supply/purchase/proposalItemReadById",
      method: "GET",
      path: "/supply/purchase/proposalItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemOpApprove": createHandler({
      operationId: "/supply/purchase/proposalItemOpApprove",
      method: "POST",
      path: "/supply/purchase/proposalItemOpApprove/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemOpApproveRevert": createHandler({
      operationId: "/supply/purchase/proposalItemOpApproveRevert",
      method: "POST",
      path: "/supply/purchase/proposalItemOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemOpDisapprove": createHandler({
      operationId: "/supply/purchase/proposalItemOpDisapprove",
      method: "POST",
      path: "/supply/purchase/proposalItemOpDisapprove/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalItemOpDisapproveRevert": createHandler({
      operationId: "/supply/purchase/proposalItemOpDisapproveRevert",
      method: "POST",
      path: "/supply/purchase/proposalItemOpDisapproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalOpCancel": createHandler({
      operationId: "/supply/purchase/proposalOpCancel",
      method: "POST",
      path: "/supply/purchase/proposalOpCancel/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalOpCancelRevert": createHandler({
      operationId: "/supply/purchase/proposalOpCancelRevert",
      method: "POST",
      path: "/supply/purchase/proposalOpCancelRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalOpPrepare": createHandler({
      operationId: "/supply/purchase/proposalOpPrepare",
      method: "POST",
      path: "/supply/purchase/proposalOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalOpPrepareRevert": createHandler({
      operationId: "/supply/purchase/proposalOpPrepareRevert",
      method: "POST",
      path: "/supply/purchase/proposalOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalRequestUpdate": createHandler({
      operationId: "/supply/purchase/proposalRequestUpdate",
      method: "PUT",
      path: "/supply/purchase/proposalRequest",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/supply/purchase/proposalRequestReadById": createHandler({
      operationId: "/supply/purchase/proposalRequestReadById",
      method: "GET",
      path: "/supply/purchase/proposalRequest/{id}",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseCreate": createHandler({
      operationId: "/supply/purchase/purchaseCreate",
      method: "POST",
      path: "/supply/purchase/purchase",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseRead": createHandler({
      operationId: "/supply/purchase/purchaseRead",
      method: "GET",
      path: "/supply/purchase/purchase",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseUpdate": createHandler({
      operationId: "/supply/purchase/purchaseUpdate",
      method: "PUT",
      path: "/supply/purchase/purchase",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseDelete": createHandler({
      operationId: "/supply/purchase/purchaseDelete",
      method: "DELETE",
      path: "/supply/purchase/purchase/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseReadById": createHandler({
      operationId: "/supply/purchase/purchaseReadById",
      method: "GET",
      path: "/supply/purchase/purchase/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseItemCreate": createHandler({
      operationId: "/supply/purchase/purchaseItemCreate",
      method: "POST",
      path: "/supply/purchase/purchaseItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseItemRead": createHandler({
      operationId: "/supply/purchase/purchaseItemRead",
      method: "GET",
      path: "/supply/purchase/purchaseItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseItemUpdate": createHandler({
      operationId: "/supply/purchase/purchaseItemUpdate",
      method: "PUT",
      path: "/supply/purchase/purchaseItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseItemDelete": createHandler({
      operationId: "/supply/purchase/purchaseItemDelete",
      method: "DELETE",
      path: "/supply/purchase/purchaseItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseItemReadById": createHandler({
      operationId: "/supply/purchase/purchaseItemReadById",
      method: "GET",
      path: "/supply/purchase/purchaseItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpApprove": createHandler({
      operationId: "/supply/purchase/purchaseOpApprove",
      method: "POST",
      path: "/supply/purchase/purchaseOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpApproveRevert": createHandler({
      operationId: "/supply/purchase/purchaseOpApproveRevert",
      method: "POST",
      path: "/supply/purchase/purchaseOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpApproveUnconditionally": createHandler({
      operationId: "/supply/purchase/purchaseOpApproveUnconditionally",
      method: "POST",
      path: "/supply/purchase/purchaseOpApproveUnconditionally/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpCancel": createHandler({
      operationId: "/supply/purchase/purchaseOpCancel",
      method: "POST",
      path: "/supply/purchase/purchaseOpCancel/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpCancelRevert": createHandler({
      operationId: "/supply/purchase/purchaseOpCancelRevert",
      method: "POST",
      path: "/supply/purchase/purchaseOpCancelRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpClone": createHandler({
      operationId: "/supply/purchase/purchaseOpClone",
      method: "POST",
      path: "/supply/purchase/purchaseOpClone/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpCreate": createHandler({
      operationId: "/supply/purchase/purchaseOpCreate",
      method: "POST",
      path: "/supply/purchase/purchaseOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpFinish": createHandler({
      operationId: "/supply/purchase/purchaseOpFinish",
      method: "POST",
      path: "/supply/purchase/purchaseOpFinish/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpFinishRevert": createHandler({
      operationId: "/supply/purchase/purchaseOpFinishRevert",
      method: "POST",
      path: "/supply/purchase/purchaseOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpMerge": createHandler({
      operationId: "/supply/purchase/purchaseOpMerge",
      method: "POST",
      path: "/supply/purchase/purchaseOpMerge",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpPrepare": createHandler({
      operationId: "/supply/purchase/purchaseOpPrepare",
      method: "POST",
      path: "/supply/purchase/purchaseOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpPrepareRevert": createHandler({
      operationId: "/supply/purchase/purchaseOpPrepareRevert",
      method: "POST",
      path: "/supply/purchase/purchaseOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpSplit": createHandler({
      operationId: "/supply/purchase/purchaseOpSplit",
      method: "POST",
      path: "/supply/purchase/purchaseOpSplit/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpTaxationCalc": createHandler({
      operationId: "/supply/purchase/purchaseOpTaxationCalc",
      method: "POST",
      path: "/supply/purchase/purchaseOpTaxationCalc/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseOpUpdatePrepared": createHandler({
      operationId: "/supply/purchase/purchaseOpUpdatePrepared",
      method: "POST",
      path: "/supply/purchase/purchaseOpUpdatePrepared",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchasePaymentCreate": createHandler({
      operationId: "/supply/purchase/purchasePaymentCreate",
      method: "POST",
      path: "/supply/purchase/purchasePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchasePaymentRead": createHandler({
      operationId: "/supply/purchase/purchasePaymentRead",
      method: "GET",
      path: "/supply/purchase/purchasePayment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchasePaymentUpdate": createHandler({
      operationId: "/supply/purchase/purchasePaymentUpdate",
      method: "PUT",
      path: "/supply/purchase/purchasePayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchasePaymentDelete": createHandler({
      operationId: "/supply/purchase/purchasePaymentDelete",
      method: "DELETE",
      path: "/supply/purchase/purchasePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchasePaymentReadById": createHandler({
      operationId: "/supply/purchase/purchasePaymentReadById",
      method: "GET",
      path: "/supply/purchase/purchasePayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseProfileCreate": createHandler({
      operationId: "/supply/purchase/purchaseProfileCreate",
      method: "POST",
      path: "/supply/purchase/purchaseProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseProfileRead": createHandler({
      operationId: "/supply/purchase/purchaseProfileRead",
      method: "GET",
      path: "/supply/purchase/purchaseProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseProfileUpdate": createHandler({
      operationId: "/supply/purchase/purchaseProfileUpdate",
      method: "PUT",
      path: "/supply/purchase/purchaseProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseProfileDelete": createHandler({
      operationId: "/supply/purchase/purchaseProfileDelete",
      method: "DELETE",
      path: "/supply/purchase/purchaseProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/purchaseProfileReadById": createHandler({
      operationId: "/supply/purchase/purchaseProfileReadById",
      method: "GET",
      path: "/supply/purchase/purchaseProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteCreate": createHandler({
      operationId: "/supply/purchase/quoteCreate",
      method: "POST",
      path: "/supply/purchase/quote",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteRead": createHandler({
      operationId: "/supply/purchase/quoteRead",
      method: "GET",
      path: "/supply/purchase/quote",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteUpdate": createHandler({
      operationId: "/supply/purchase/quoteUpdate",
      method: "PUT",
      path: "/supply/purchase/quote",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteDelete": createHandler({
      operationId: "/supply/purchase/quoteDelete",
      method: "DELETE",
      path: "/supply/purchase/quote/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteReadById": createHandler({
      operationId: "/supply/purchase/quoteReadById",
      method: "GET",
      path: "/supply/purchase/quote/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteItemCreate": createHandler({
      operationId: "/supply/purchase/quoteItemCreate",
      method: "POST",
      path: "/supply/purchase/quoteItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteItemRead": createHandler({
      operationId: "/supply/purchase/quoteItemRead",
      method: "GET",
      path: "/supply/purchase/quoteItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteItemUpdate": createHandler({
      operationId: "/supply/purchase/quoteItemUpdate",
      method: "PUT",
      path: "/supply/purchase/quoteItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteItemDelete": createHandler({
      operationId: "/supply/purchase/quoteItemDelete",
      method: "DELETE",
      path: "/supply/purchase/quoteItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteItemReadById": createHandler({
      operationId: "/supply/purchase/quoteItemReadById",
      method: "GET",
      path: "/supply/purchase/quoteItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpApprove": createHandler({
      operationId: "/supply/purchase/quoteOpApprove",
      method: "POST",
      path: "/supply/purchase/quoteOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpApproveRevert": createHandler({
      operationId: "/supply/purchase/quoteOpApproveRevert",
      method: "POST",
      path: "/supply/purchase/quoteOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpCancel": createHandler({
      operationId: "/supply/purchase/quoteOpCancel",
      method: "POST",
      path: "/supply/purchase/quoteOpCancel/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpCancelRevert": createHandler({
      operationId: "/supply/purchase/quoteOpCancelRevert",
      method: "POST",
      path: "/supply/purchase/quoteOpCancelRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpCreate": createHandler({
      operationId: "/supply/purchase/quoteOpCreate",
      method: "POST",
      path: "/supply/purchase/quoteOpCreate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpFinish": createHandler({
      operationId: "/supply/purchase/quoteOpFinish",
      method: "POST",
      path: "/supply/purchase/quoteOpFinish/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpFinishRevert": createHandler({
      operationId: "/supply/purchase/quoteOpFinishRevert",
      method: "POST",
      path: "/supply/purchase/quoteOpFinishRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpPrepare": createHandler({
      operationId: "/supply/purchase/quoteOpPrepare",
      method: "POST",
      path: "/supply/purchase/quoteOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/supply/purchase/quoteOpPrepareRevert": createHandler({
      operationId: "/supply/purchase/quoteOpPrepareRevert",
      method: "POST",
      path: "/supply/purchase/quoteOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/audit": {
    "/system/audit/logCreate": createHandler({
      operationId: "/system/audit/logCreate",
      method: "POST",
      path: "/system/audit/log",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/logRead": createHandler({
      operationId: "/system/audit/logRead",
      method: "GET",
      path: "/system/audit/log",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/logReadById": createHandler({
      operationId: "/system/audit/logReadById",
      method: "GET",
      path: "/system/audit/log/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/logOpDeleteExpired": createHandler({
      operationId: "/system/audit/logOpDeleteExpired",
      method: "POST",
      path: "/system/audit/logOpDeleteExpired",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/sourceRead": createHandler({
      operationId: "/system/audit/sourceRead",
      method: "GET",
      path: "/system/audit/source",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/sourceReadById": createHandler({
      operationId: "/system/audit/sourceReadById",
      method: "GET",
      path: "/system/audit/source/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/sourceOpReadByEntity": createHandler({
      operationId: "/system/audit/sourceOpReadByEntity",
      method: "POST",
      path: "/system/audit/sourceOpReadByEntity",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/userLogCreate": createHandler({
      operationId: "/system/audit/userLogCreate",
      method: "POST",
      path: "/system/audit/userLog",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/userLogRead": createHandler({
      operationId: "/system/audit/userLogRead",
      method: "GET",
      path: "/system/audit/userLog",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/userLogUpdate": createHandler({
      operationId: "/system/audit/userLogUpdate",
      method: "PUT",
      path: "/system/audit/userLog",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/userLogDelete": createHandler({
      operationId: "/system/audit/userLogDelete",
      method: "DELETE",
      path: "/system/audit/userLog/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/audit/userLogReadById": createHandler({
      operationId: "/system/audit/userLogReadById",
      method: "GET",
      path: "/system/audit/userLog/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/automation": {
    "/system/automation/agentCreate": createHandler({
      operationId: "/system/automation/agentCreate",
      method: "POST",
      path: "/system/automation/agent",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/agentRead": createHandler({
      operationId: "/system/automation/agentRead",
      method: "GET",
      path: "/system/automation/agent",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/agentUpdate": createHandler({
      operationId: "/system/automation/agentUpdate",
      method: "PUT",
      path: "/system/automation/agent",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/agentDelete": createHandler({
      operationId: "/system/automation/agentDelete",
      method: "DELETE",
      path: "/system/automation/agent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/agentReadById": createHandler({
      operationId: "/system/automation/agentReadById",
      method: "GET",
      path: "/system/automation/agent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/agentOpExecute": createHandler({
      operationId: "/system/automation/agentOpExecute",
      method: "POST",
      path: "/system/automation/agentOpExecute/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/scheduleCreate": createHandler({
      operationId: "/system/automation/scheduleCreate",
      method: "POST",
      path: "/system/automation/schedule",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/scheduleRead": createHandler({
      operationId: "/system/automation/scheduleRead",
      method: "GET",
      path: "/system/automation/schedule",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/scheduleUpdate": createHandler({
      operationId: "/system/automation/scheduleUpdate",
      method: "PUT",
      path: "/system/automation/schedule",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/scheduleDelete": createHandler({
      operationId: "/system/automation/scheduleDelete",
      method: "DELETE",
      path: "/system/automation/schedule/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/scheduleReadById": createHandler({
      operationId: "/system/automation/scheduleReadById",
      method: "GET",
      path: "/system/automation/schedule/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/scheduleOpExecute": createHandler({
      operationId: "/system/automation/scheduleOpExecute",
      method: "POST",
      path: "/system/automation/scheduleOpExecute/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/watcherCreate": createHandler({
      operationId: "/system/automation/watcherCreate",
      method: "POST",
      path: "/system/automation/watcher",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/watcherRead": createHandler({
      operationId: "/system/automation/watcherRead",
      method: "GET",
      path: "/system/automation/watcher",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/watcherUpdate": createHandler({
      operationId: "/system/automation/watcherUpdate",
      method: "PUT",
      path: "/system/automation/watcher",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/watcherDelete": createHandler({
      operationId: "/system/automation/watcherDelete",
      method: "DELETE",
      path: "/system/automation/watcher/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/automation/watcherReadById": createHandler({
      operationId: "/system/automation/watcherReadById",
      method: "GET",
      path: "/system/automation/watcher/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system": {
    "/system/checkAuth": createHandler({
      operationId: "/system/checkAuth",
      method: "GET",
      path: "/system/checkAuth",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/customPropertiesOpSet": createHandler({
      operationId: "/system/customPropertiesOpSet",
      method: "POST",
      path: "/system/customPropertiesOpSet",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/customTagsOpSet": createHandler({
      operationId: "/system/customTagsOpSet",
      method: "POST",
      path: "/system/customTagsOpSet",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/databaseOpOptimize": createHandler({
      operationId: "/system/databaseOpOptimize",
      method: "POST",
      path: "/system/databaseOpOptimize",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/infoRead": createHandler({
      operationId: "/system/infoRead",
      method: "GET",
      path: "/system/info",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/lockOpAcquire": createHandler({
      operationId: "/system/lockOpAcquire",
      method: "POST",
      path: "/system/lockOpAcquire/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/lockOpExtend": createHandler({
      operationId: "/system/lockOpExtend",
      method: "POST",
      path: "/system/lockOpExtend/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/lockOpRelease": createHandler({
      operationId: "/system/lockOpRelease",
      method: "POST",
      path: "/system/lockOpRelease/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/resourcesRead": createHandler({
      operationId: "/system/resourcesRead",
      method: "GET",
      path: "/system/resources",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/statusCreate": createHandler({
      operationId: "/system/statusCreate",
      method: "POST",
      path: "/system/status",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/statusRead": createHandler({
      operationId: "/system/statusRead",
      method: "GET",
      path: "/system/status",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/statusUpdate": createHandler({
      operationId: "/system/statusUpdate",
      method: "PUT",
      path: "/system/status",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/statusDelete": createHandler({
      operationId: "/system/statusDelete",
      method: "DELETE",
      path: "/system/status/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/statusReadById": createHandler({
      operationId: "/system/statusReadById",
      method: "GET",
      path: "/system/status/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/testCreate": createHandler({
      operationId: "/system/testCreate",
      method: "POST",
      path: "/system/test",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/testRead": createHandler({
      operationId: "/system/testRead",
      method: "GET",
      path: "/system/test",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    })
  },  "system/data": {
    "/system/data/dataSourceCreate": createHandler({
      operationId: "/system/data/dataSourceCreate",
      method: "POST",
      path: "/system/data/dataSource",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceRead": createHandler({
      operationId: "/system/data/dataSourceRead",
      method: "GET",
      path: "/system/data/dataSource",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceUpdate": createHandler({
      operationId: "/system/data/dataSourceUpdate",
      method: "PUT",
      path: "/system/data/dataSource",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceDelete": createHandler({
      operationId: "/system/data/dataSourceDelete",
      method: "DELETE",
      path: "/system/data/dataSource/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceReadById": createHandler({
      operationId: "/system/data/dataSourceReadById",
      method: "GET",
      path: "/system/data/dataSource/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceFieldRead": createHandler({
      operationId: "/system/data/dataSourceFieldRead",
      method: "GET",
      path: "/system/data/dataSourceField",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceFieldUpdate": createHandler({
      operationId: "/system/data/dataSourceFieldUpdate",
      method: "PUT",
      path: "/system/data/dataSourceField",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceFieldReadById": createHandler({
      operationId: "/system/data/dataSourceFieldReadById",
      method: "GET",
      path: "/system/data/dataSourceField/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceOpRead": createHandler({
      operationId: "/system/data/dataSourceOpRead",
      method: "POST",
      path: "/system/data/dataSourceOpRead",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceParameterCreate": createHandler({
      operationId: "/system/data/dataSourceParameterCreate",
      method: "POST",
      path: "/system/data/dataSourceParameter",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceParameterRead": createHandler({
      operationId: "/system/data/dataSourceParameterRead",
      method: "GET",
      path: "/system/data/dataSourceParameter",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceParameterUpdate": createHandler({
      operationId: "/system/data/dataSourceParameterUpdate",
      method: "PUT",
      path: "/system/data/dataSourceParameter",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceParameterDelete": createHandler({
      operationId: "/system/data/dataSourceParameterDelete",
      method: "DELETE",
      path: "/system/data/dataSourceParameter/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/data/dataSourceParameterReadById": createHandler({
      operationId: "/system/data/dataSourceParameterReadById",
      method: "GET",
      path: "/system/data/dataSourceParameter/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/file": {
    "/system/file/fileCreate": createHandler({
      operationId: "/system/file/fileCreate",
      method: "POST",
      path: "/system/file/file",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/file/fileRead": createHandler({
      operationId: "/system/file/fileRead",
      method: "GET",
      path: "/system/file/file",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/file/fileUpdate": createHandler({
      operationId: "/system/file/fileUpdate",
      method: "PUT",
      path: "/system/file/file",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/file/fileDelete": createHandler({
      operationId: "/system/file/fileDelete",
      method: "DELETE",
      path: "/system/file/file/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/file/fileReadById": createHandler({
      operationId: "/system/file/fileReadById",
      method: "GET",
      path: "/system/file/file/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/file/fileOpReadContent": createHandler({
      operationId: "/system/file/fileOpReadContent",
      method: "POST",
      path: "/system/file/fileOpReadContent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/frontend": {
    "/system/frontend/injectsRead": createHandler({
      operationId: "/system/frontend/injectsRead",
      method: "GET",
      path: "/system/frontend/injects",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/frontend/injectsUpdate": createHandler({
      operationId: "/system/frontend/injectsUpdate",
      method: "PUT",
      path: "/system/frontend/injects",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/frontend/menuRead": createHandler({
      operationId: "/system/frontend/menuRead",
      method: "GET",
      path: "/system/frontend/menu",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/frontend/menuUpdate": createHandler({
      operationId: "/system/frontend/menuUpdate",
      method: "PUT",
      path: "/system/frontend/menu",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/frontend/resourcesRead": createHandler({
      operationId: "/system/frontend/resourcesRead",
      method: "GET",
      path: "/system/frontend/resources",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/frontend/resourcesUpdate": createHandler({
      operationId: "/system/frontend/resourcesUpdate",
      method: "PUT",
      path: "/system/frontend/resources",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/image": {
    "/system/image/imageCreate": createHandler({
      operationId: "/system/image/imageCreate",
      method: "POST",
      path: "/system/image/image",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/image/imageRead": createHandler({
      operationId: "/system/image/imageRead",
      method: "GET",
      path: "/system/image/image",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/image/imageUpdate": createHandler({
      operationId: "/system/image/imageUpdate",
      method: "PUT",
      path: "/system/image/image",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/image/imageDelete": createHandler({
      operationId: "/system/image/imageDelete",
      method: "DELETE",
      path: "/system/image/image/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/image/imageReadById": createHandler({
      operationId: "/system/image/imageReadById",
      method: "GET",
      path: "/system/image/image/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/info": {
    "/system/info/healthRead": createHandler({
      operationId: "/system/info/healthRead",
      method: "GET",
      path: "/system/info/health",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/info/metricsRead": createHandler({
      operationId: "/system/info/metricsRead",
      method: "GET",
      path: "/system/info/metrics",
      hasBody: false,
      security: {
        auth: false,
        tenant: true,
      },
    })
  },  "system/integration": {
    "/system/integration/messageRead": createHandler({
      operationId: "/system/integration/messageRead",
      method: "GET",
      path: "/system/integration/message",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/messageDelete": createHandler({
      operationId: "/system/integration/messageDelete",
      method: "DELETE",
      path: "/system/integration/message/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/messageReadById": createHandler({
      operationId: "/system/integration/messageReadById",
      method: "GET",
      path: "/system/integration/message/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/messageOpPost": createHandler({
      operationId: "/system/integration/messageOpPost",
      method: "POST",
      path: "/system/integration/messageOpPost",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/messageOpTransfer": createHandler({
      operationId: "/system/integration/messageOpTransfer",
      method: "POST",
      path: "/system/integration/messageOpTransfer/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueCreate": createHandler({
      operationId: "/system/integration/queueCreate",
      method: "POST",
      path: "/system/integration/queue",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueRead": createHandler({
      operationId: "/system/integration/queueRead",
      method: "GET",
      path: "/system/integration/queue",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueUpdate": createHandler({
      operationId: "/system/integration/queueUpdate",
      method: "PUT",
      path: "/system/integration/queue",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueDelete": createHandler({
      operationId: "/system/integration/queueDelete",
      method: "DELETE",
      path: "/system/integration/queue/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueReadById": createHandler({
      operationId: "/system/integration/queueReadById",
      method: "GET",
      path: "/system/integration/queue/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueOpDeleteExpiredMessages": createHandler({
      operationId: "/system/integration/queueOpDeleteExpiredMessages",
      method: "POST",
      path: "/system/integration/queueOpDeleteExpiredMessages",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueOpReadMessage": createHandler({
      operationId: "/system/integration/queueOpReadMessage",
      method: "POST",
      path: "/system/integration/queueOpReadMessage",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/queueOpReadMessageTimeout": createHandler({
      operationId: "/system/integration/queueOpReadMessageTimeout",
      method: "POST",
      path: "/system/integration/queueOpReadMessageTimeout",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/subscriptionCreate": createHandler({
      operationId: "/system/integration/subscriptionCreate",
      method: "POST",
      path: "/system/integration/subscription",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/subscriptionRead": createHandler({
      operationId: "/system/integration/subscriptionRead",
      method: "GET",
      path: "/system/integration/subscription",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/subscriptionUpdate": createHandler({
      operationId: "/system/integration/subscriptionUpdate",
      method: "PUT",
      path: "/system/integration/subscription",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/subscriptionDelete": createHandler({
      operationId: "/system/integration/subscriptionDelete",
      method: "DELETE",
      path: "/system/integration/subscription/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/subscriptionReadById": createHandler({
      operationId: "/system/integration/subscriptionReadById",
      method: "GET",
      path: "/system/integration/subscription/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/topicCreate": createHandler({
      operationId: "/system/integration/topicCreate",
      method: "POST",
      path: "/system/integration/topic",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/topicRead": createHandler({
      operationId: "/system/integration/topicRead",
      method: "GET",
      path: "/system/integration/topic",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/topicUpdate": createHandler({
      operationId: "/system/integration/topicUpdate",
      method: "PUT",
      path: "/system/integration/topic",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/topicDelete": createHandler({
      operationId: "/system/integration/topicDelete",
      method: "DELETE",
      path: "/system/integration/topic/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/topicReadById": createHandler({
      operationId: "/system/integration/topicReadById",
      method: "GET",
      path: "/system/integration/topic/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/integration/topicOpPublish": createHandler({
      operationId: "/system/integration/topicOpPublish",
      method: "POST",
      path: "/system/integration/topicOpPublish",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/job": {
    "/system/job/jobRead": createHandler({
      operationId: "/system/job/jobRead",
      method: "GET",
      path: "/system/job/job",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/job/jobDelete": createHandler({
      operationId: "/system/job/jobDelete",
      method: "DELETE",
      path: "/system/job/job/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/job/jobReadById": createHandler({
      operationId: "/system/job/jobReadById",
      method: "GET",
      path: "/system/job/job/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/mail": {
    "/system/mail/mailerConfigCreate": createHandler({
      operationId: "/system/mail/mailerConfigCreate",
      method: "POST",
      path: "/system/mail/mailerConfig",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/mail/mailerConfigRead": createHandler({
      operationId: "/system/mail/mailerConfigRead",
      method: "GET",
      path: "/system/mail/mailerConfig",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/mail/mailerConfigUpdate": createHandler({
      operationId: "/system/mail/mailerConfigUpdate",
      method: "PUT",
      path: "/system/mail/mailerConfig",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/mail/mailerConfigDelete": createHandler({
      operationId: "/system/mail/mailerConfigDelete",
      method: "DELETE",
      path: "/system/mail/mailerConfig/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/mail/mailerConfigReadById": createHandler({
      operationId: "/system/mail/mailerConfigReadById",
      method: "GET",
      path: "/system/mail/mailerConfig/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/mail/messageOpSend": createHandler({
      operationId: "/system/mail/messageOpSend",
      method: "POST",
      path: "/system/mail/messageOpSend",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/printing": {
    "/system/printing/printerCreate": createHandler({
      operationId: "/system/printing/printerCreate",
      method: "POST",
      path: "/system/printing/printer",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerRead": createHandler({
      operationId: "/system/printing/printerRead",
      method: "GET",
      path: "/system/printing/printer",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerUpdate": createHandler({
      operationId: "/system/printing/printerUpdate",
      method: "PUT",
      path: "/system/printing/printer",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerDelete": createHandler({
      operationId: "/system/printing/printerDelete",
      method: "DELETE",
      path: "/system/printing/printer/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerReadById": createHandler({
      operationId: "/system/printing/printerReadById",
      method: "GET",
      path: "/system/printing/printer/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobCreate": createHandler({
      operationId: "/system/printing/printerJobCreate",
      method: "POST",
      path: "/system/printing/printerJob",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobRead": createHandler({
      operationId: "/system/printing/printerJobRead",
      method: "GET",
      path: "/system/printing/printerJob",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobDelete": createHandler({
      operationId: "/system/printing/printerJobDelete",
      method: "DELETE",
      path: "/system/printing/printerJob/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobReadById": createHandler({
      operationId: "/system/printing/printerJobReadById",
      method: "GET",
      path: "/system/printing/printerJob/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobDataReadById": createHandler({
      operationId: "/system/printing/printerJobDataReadById",
      method: "GET",
      path: "/system/printing/printerJobData/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobOpFetch": createHandler({
      operationId: "/system/printing/printerJobOpFetch",
      method: "POST",
      path: "/system/printing/printerJobOpFetch/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobOpPrinted": createHandler({
      operationId: "/system/printing/printerJobOpPrinted",
      method: "POST",
      path: "/system/printing/printerJobOpPrinted/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerJobOpUnlock": createHandler({
      operationId: "/system/printing/printerJobOpUnlock",
      method: "POST",
      path: "/system/printing/printerJobOpUnlock/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerOpPause": createHandler({
      operationId: "/system/printing/printerOpPause",
      method: "POST",
      path: "/system/printing/printerOpPause/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerOpPauseRevert": createHandler({
      operationId: "/system/printing/printerOpPauseRevert",
      method: "POST",
      path: "/system/printing/printerOpPauseRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerOpPrintTestPage": createHandler({
      operationId: "/system/printing/printerOpPrintTestPage",
      method: "POST",
      path: "/system/printing/printerOpPrintTestPage/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/printing/printerOpPrinterJobFetch": createHandler({
      operationId: "/system/printing/printerOpPrinterJobFetch",
      method: "POST",
      path: "/system/printing/printerOpPrinterJobFetch/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/report": {
    "/system/report/reportCreate": createHandler({
      operationId: "/system/report/reportCreate",
      method: "POST",
      path: "/system/report/report",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportRead": createHandler({
      operationId: "/system/report/reportRead",
      method: "GET",
      path: "/system/report/report",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportUpdate": createHandler({
      operationId: "/system/report/reportUpdate",
      method: "PUT",
      path: "/system/report/report",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportDelete": createHandler({
      operationId: "/system/report/reportDelete",
      method: "DELETE",
      path: "/system/report/report/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportReadById": createHandler({
      operationId: "/system/report/reportReadById",
      method: "GET",
      path: "/system/report/report/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportOpClone": createHandler({
      operationId: "/system/report/reportOpClone",
      method: "POST",
      path: "/system/report/reportOpClone/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportOpGenerate": createHandler({
      operationId: "/system/report/reportOpGenerate",
      method: "POST",
      path: "/system/report/reportOpGenerate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportOpPrint": createHandler({
      operationId: "/system/report/reportOpPrint",
      method: "POST",
      path: "/system/report/reportOpPrint",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportTemplateRead": createHandler({
      operationId: "/system/report/reportTemplateRead",
      method: "GET",
      path: "/system/report/reportTemplate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportTemplateReadById": createHandler({
      operationId: "/system/report/reportTemplateReadById",
      method: "GET",
      path: "/system/report/reportTemplate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/report/reportTemplateOpUpdate": createHandler({
      operationId: "/system/report/reportTemplateOpUpdate",
      method: "POST",
      path: "/system/report/reportTemplateOpUpdate/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/security": {
    "/system/security/accessPointCreate": createHandler({
      operationId: "/system/security/accessPointCreate",
      method: "POST",
      path: "/system/security/accessPoint",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessPointRead": createHandler({
      operationId: "/system/security/accessPointRead",
      method: "GET",
      path: "/system/security/accessPoint",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessPointUpdate": createHandler({
      operationId: "/system/security/accessPointUpdate",
      method: "PUT",
      path: "/system/security/accessPoint",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessPointDelete": createHandler({
      operationId: "/system/security/accessPointDelete",
      method: "DELETE",
      path: "/system/security/accessPoint/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessPointReadById": createHandler({
      operationId: "/system/security/accessPointReadById",
      method: "GET",
      path: "/system/security/accessPoint/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessPointOpValidate": createHandler({
      operationId: "/system/security/accessPointOpValidate",
      method: "POST",
      path: "/system/security/accessPointOpValidate",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessProfileCreate": createHandler({
      operationId: "/system/security/accessProfileCreate",
      method: "POST",
      path: "/system/security/accessProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessProfileRead": createHandler({
      operationId: "/system/security/accessProfileRead",
      method: "GET",
      path: "/system/security/accessProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessProfileUpdate": createHandler({
      operationId: "/system/security/accessProfileUpdate",
      method: "PUT",
      path: "/system/security/accessProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessProfileDelete": createHandler({
      operationId: "/system/security/accessProfileDelete",
      method: "DELETE",
      path: "/system/security/accessProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/accessProfileReadById": createHandler({
      operationId: "/system/security/accessProfileReadById",
      method: "GET",
      path: "/system/security/accessProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/grantCreate": createHandler({
      operationId: "/system/security/grantCreate",
      method: "POST",
      path: "/system/security/grant",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/grantRead": createHandler({
      operationId: "/system/security/grantRead",
      method: "GET",
      path: "/system/security/grant",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/grantDelete": createHandler({
      operationId: "/system/security/grantDelete",
      method: "DELETE",
      path: "/system/security/grant/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/grantReadById": createHandler({
      operationId: "/system/security/grantReadById",
      method: "GET",
      path: "/system/security/grant/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/groupCreate": createHandler({
      operationId: "/system/security/groupCreate",
      method: "POST",
      path: "/system/security/group",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/groupRead": createHandler({
      operationId: "/system/security/groupRead",
      method: "GET",
      path: "/system/security/group",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/groupUpdate": createHandler({
      operationId: "/system/security/groupUpdate",
      method: "PUT",
      path: "/system/security/group",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/groupDelete": createHandler({
      operationId: "/system/security/groupDelete",
      method: "DELETE",
      path: "/system/security/group/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/groupReadById": createHandler({
      operationId: "/system/security/groupReadById",
      method: "GET",
      path: "/system/security/group/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/groupOpClone": createHandler({
      operationId: "/system/security/groupOpClone",
      method: "POST",
      path: "/system/security/groupOpClone/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/keyStoreCreate": createHandler({
      operationId: "/system/security/keyStoreCreate",
      method: "POST",
      path: "/system/security/keyStore",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/keyStoreRead": createHandler({
      operationId: "/system/security/keyStoreRead",
      method: "GET",
      path: "/system/security/keyStore",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/keyStoreUpdate": createHandler({
      operationId: "/system/security/keyStoreUpdate",
      method: "PUT",
      path: "/system/security/keyStore",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/keyStoreDelete": createHandler({
      operationId: "/system/security/keyStoreDelete",
      method: "DELETE",
      path: "/system/security/keyStore/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/keyStoreReadById": createHandler({
      operationId: "/system/security/keyStoreReadById",
      method: "GET",
      path: "/system/security/keyStore/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/keyStoreOpReadContent": createHandler({
      operationId: "/system/security/keyStoreOpReadContent",
      method: "POST",
      path: "/system/security/keyStoreOpReadContent/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/roleRead": createHandler({
      operationId: "/system/security/roleRead",
      method: "GET",
      path: "/system/security/role",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/roleReadById": createHandler({
      operationId: "/system/security/roleReadById",
      method: "GET",
      path: "/system/security/role/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/roleAccessPointCreate": createHandler({
      operationId: "/system/security/roleAccessPointCreate",
      method: "POST",
      path: "/system/security/roleAccessPoint",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/roleAccessPointRead": createHandler({
      operationId: "/system/security/roleAccessPointRead",
      method: "GET",
      path: "/system/security/roleAccessPoint",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/roleAccessPointDelete": createHandler({
      operationId: "/system/security/roleAccessPointDelete",
      method: "DELETE",
      path: "/system/security/roleAccessPoint/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/roleAccessPointReadById": createHandler({
      operationId: "/system/security/roleAccessPointReadById",
      method: "GET",
      path: "/system/security/roleAccessPoint/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/sessionRead": createHandler({
      operationId: "/system/security/sessionRead",
      method: "GET",
      path: "/system/security/session",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/sessionDelete": createHandler({
      operationId: "/system/security/sessionDelete",
      method: "DELETE",
      path: "/system/security/session/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/sessionReadById": createHandler({
      operationId: "/system/security/sessionReadById",
      method: "GET",
      path: "/system/security/session/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/sessionContext": createHandler({
      operationId: "/system/security/sessionContext",
      method: "GET",
      path: "/system/security/sessionContext",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/sessionOpGetCurrent": createHandler({
      operationId: "/system/security/sessionOpGetCurrent",
      method: "GET",
      path: "/system/security/sessionOpGetCurrent",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/tokenOpInvalidate": createHandler({
      operationId: "/system/security/tokenOpInvalidate",
      method: "POST",
      path: "/system/security/tokenOpInvalidate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/tokenOpInvalidateCurrent": createHandler({
      operationId: "/system/security/tokenOpInvalidateCurrent",
      method: "POST",
      path: "/system/security/tokenOpInvalidateCurrent",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/tokenOpRenew": createHandler({
      operationId: "/system/security/tokenOpRenew",
      method: "POST",
      path: "/system/security/tokenOpRenew",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/tokenOpRequest": createHandler({
      operationId: "/system/security/tokenOpRequest",
      method: "POST",
      path: "/system/security/tokenOpRequest",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/security/tokenOpRequestPermanent": createHandler({
      operationId: "/system/security/tokenOpRequestPermanent",
      method: "POST",
      path: "/system/security/tokenOpRequestPermanent",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userCreate": createHandler({
      operationId: "/system/security/userCreate",
      method: "POST",
      path: "/system/security/user",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userRead": createHandler({
      operationId: "/system/security/userRead",
      method: "GET",
      path: "/system/security/user",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userUpdate": createHandler({
      operationId: "/system/security/userUpdate",
      method: "PUT",
      path: "/system/security/user",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userDelete": createHandler({
      operationId: "/system/security/userDelete",
      method: "DELETE",
      path: "/system/security/user/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userReadById": createHandler({
      operationId: "/system/security/userReadById",
      method: "GET",
      path: "/system/security/user/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpActivate": createHandler({
      operationId: "/system/security/userOpActivate",
      method: "POST",
      path: "/system/security/userOpActivate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpAuthenticate": createHandler({
      operationId: "/system/security/userOpAuthenticate",
      method: "POST",
      path: "/system/security/userOpAuthenticate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpChangeEmail": createHandler({
      operationId: "/system/security/userOpChangeEmail",
      method: "POST",
      path: "/system/security/userOpChangeEmail",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpChangeEmailConfirmation": createHandler({
      operationId: "/system/security/userOpChangeEmailConfirmation",
      method: "POST",
      path: "/system/security/userOpChangeEmailConfirmation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpChangePassword": createHandler({
      operationId: "/system/security/userOpChangePassword",
      method: "POST",
      path: "/system/security/userOpChangePassword",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpChangePasswordThird": createHandler({
      operationId: "/system/security/userOpChangePasswordThird",
      method: "POST",
      path: "/system/security/userOpChangePasswordThird/{id}",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpCreate": createHandler({
      operationId: "/system/security/userOpCreate",
      method: "POST",
      path: "/system/security/userOpCreate",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/security/userOpCreateConfirmation": createHandler({
      operationId: "/system/security/userOpCreateConfirmation",
      method: "POST",
      path: "/system/security/userOpCreateConfirmation",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/security/userOpCreateResend": createHandler({
      operationId: "/system/security/userOpCreateResend",
      method: "POST",
      path: "/system/security/userOpCreateResend",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/security/userOpGrantOptionAdd": createHandler({
      operationId: "/system/security/userOpGrantOptionAdd",
      method: "POST",
      path: "/system/security/userOpGrantOptionAdd/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpGrantOptionRemove": createHandler({
      operationId: "/system/security/userOpGrantOptionRemove",
      method: "POST",
      path: "/system/security/userOpGrantOptionRemove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpInactivate": createHandler({
      operationId: "/system/security/userOpInactivate",
      method: "POST",
      path: "/system/security/userOpInactivate/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpResetPassword": createHandler({
      operationId: "/system/security/userOpResetPassword",
      method: "POST",
      path: "/system/security/userOpResetPassword",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/security/userOpResetPasswordConfirmation": createHandler({
      operationId: "/system/security/userOpResetPasswordConfirmation",
      method: "POST",
      path: "/system/security/userOpResetPasswordConfirmation",
      hasBody: true,
      security: {
        auth: false,
        tenant: true,
      },
    }),
    "/system/security/userOpUnlock": createHandler({
      operationId: "/system/security/userOpUnlock",
      method: "POST",
      path: "/system/security/userOpUnlock/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userOpUpdate": createHandler({
      operationId: "/system/security/userOpUpdate",
      method: "POST",
      path: "/system/security/userOpUpdate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/security/userPermissionRead": createHandler({
      operationId: "/system/security/userPermissionRead",
      method: "GET",
      path: "/system/security/userPermission",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/storage": {
    "/system/storage/get": createHandler({
      operationId: "/system/storage/get",
      method: "GET",
      path: "/system/storage/get",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/getNumber": createHandler({
      operationId: "/system/storage/getNumber",
      method: "GET",
      path: "/system/storage/getNumber",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/getString": createHandler({
      operationId: "/system/storage/getString",
      method: "GET",
      path: "/system/storage/getString",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/put": createHandler({
      operationId: "/system/storage/put",
      method: "PUT",
      path: "/system/storage/put",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/putNumber": createHandler({
      operationId: "/system/storage/putNumber",
      method: "PUT",
      path: "/system/storage/putNumber",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/putString": createHandler({
      operationId: "/system/storage/putString",
      method: "PUT",
      path: "/system/storage/putString",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/remove": createHandler({
      operationId: "/system/storage/remove",
      method: "DELETE",
      path: "/system/storage/remove",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userGet": createHandler({
      operationId: "/system/storage/userGet",
      method: "GET",
      path: "/system/storage/userGet",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userGetNumber": createHandler({
      operationId: "/system/storage/userGetNumber",
      method: "GET",
      path: "/system/storage/userGetNumber",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userGetString": createHandler({
      operationId: "/system/storage/userGetString",
      method: "GET",
      path: "/system/storage/userGetString",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userPut": createHandler({
      operationId: "/system/storage/userPut",
      method: "PUT",
      path: "/system/storage/userPut",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userPutNumber": createHandler({
      operationId: "/system/storage/userPutNumber",
      method: "PUT",
      path: "/system/storage/userPutNumber",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userPutString": createHandler({
      operationId: "/system/storage/userPutString",
      method: "PUT",
      path: "/system/storage/userPutString",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/storage/userRemove": createHandler({
      operationId: "/system/storage/userRemove",
      method: "DELETE",
      path: "/system/storage/userRemove",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "system/workflow": {
    "/system/workflow/workflowCreate": createHandler({
      operationId: "/system/workflow/workflowCreate",
      method: "POST",
      path: "/system/workflow/workflow",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowRead": createHandler({
      operationId: "/system/workflow/workflowRead",
      method: "GET",
      path: "/system/workflow/workflow",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowUpdate": createHandler({
      operationId: "/system/workflow/workflowUpdate",
      method: "PUT",
      path: "/system/workflow/workflow",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowDelete": createHandler({
      operationId: "/system/workflow/workflowDelete",
      method: "DELETE",
      path: "/system/workflow/workflow/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowReadById": createHandler({
      operationId: "/system/workflow/workflowReadById",
      method: "GET",
      path: "/system/workflow/workflow/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowConnectorCreate": createHandler({
      operationId: "/system/workflow/workflowConnectorCreate",
      method: "POST",
      path: "/system/workflow/workflowConnector",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowConnectorRead": createHandler({
      operationId: "/system/workflow/workflowConnectorRead",
      method: "GET",
      path: "/system/workflow/workflowConnector",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowConnectorUpdate": createHandler({
      operationId: "/system/workflow/workflowConnectorUpdate",
      method: "PUT",
      path: "/system/workflow/workflowConnector",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowConnectorDelete": createHandler({
      operationId: "/system/workflow/workflowConnectorDelete",
      method: "DELETE",
      path: "/system/workflow/workflowConnector/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowConnectorReadById": createHandler({
      operationId: "/system/workflow/workflowConnectorReadById",
      method: "GET",
      path: "/system/workflow/workflowConnector/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowNodeCreate": createHandler({
      operationId: "/system/workflow/workflowNodeCreate",
      method: "POST",
      path: "/system/workflow/workflowNode",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowNodeRead": createHandler({
      operationId: "/system/workflow/workflowNodeRead",
      method: "GET",
      path: "/system/workflow/workflowNode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowNodeUpdate": createHandler({
      operationId: "/system/workflow/workflowNodeUpdate",
      method: "PUT",
      path: "/system/workflow/workflowNode",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowNodeDelete": createHandler({
      operationId: "/system/workflow/workflowNodeDelete",
      method: "DELETE",
      path: "/system/workflow/workflowNode/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowNodeReadById": createHandler({
      operationId: "/system/workflow/workflowNodeReadById",
      method: "GET",
      path: "/system/workflow/workflowNode/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpApprove": createHandler({
      operationId: "/system/workflow/workflowOpApprove",
      method: "POST",
      path: "/system/workflow/workflowOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpApproveRevert": createHandler({
      operationId: "/system/workflow/workflowOpApproveRevert",
      method: "POST",
      path: "/system/workflow/workflowOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpCreateOrUpdate": createHandler({
      operationId: "/system/workflow/workflowOpCreateOrUpdate",
      method: "POST",
      path: "/system/workflow/workflowOpCreateOrUpdate",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpDisable": createHandler({
      operationId: "/system/workflow/workflowOpDisable",
      method: "POST",
      path: "/system/workflow/workflowOpDisable/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpDisableRevert": createHandler({
      operationId: "/system/workflow/workflowOpDisableRevert",
      method: "POST",
      path: "/system/workflow/workflowOpDisableRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpPrepare": createHandler({
      operationId: "/system/workflow/workflowOpPrepare",
      method: "POST",
      path: "/system/workflow/workflowOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workflowOpPrepareRevert": createHandler({
      operationId: "/system/workflow/workflowOpPrepareRevert",
      method: "POST",
      path: "/system/workflow/workflowOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workpieceRead": createHandler({
      operationId: "/system/workflow/workpieceRead",
      method: "GET",
      path: "/system/workflow/workpiece",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workpieceReadById": createHandler({
      operationId: "/system/workflow/workpieceReadById",
      method: "GET",
      path: "/system/workflow/workpiece/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workpieceNodeRead": createHandler({
      operationId: "/system/workflow/workpieceNodeRead",
      method: "GET",
      path: "/system/workflow/workpieceNode",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workpieceNodeReadById": createHandler({
      operationId: "/system/workflow/workpieceNodeReadById",
      method: "GET",
      path: "/system/workflow/workpieceNode/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workpieceOpForward": createHandler({
      operationId: "/system/workflow/workpieceOpForward",
      method: "POST",
      path: "/system/workflow/workpieceOpForward/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/system/workflow/workpieceOpRevert": createHandler({
      operationId: "/system/workflow/workpieceOpRevert",
      method: "POST",
      path: "/system/workflow/workpieceOpRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  },  "trade": {
    "/trade/clearanceCreate": createHandler({
      operationId: "/trade/clearanceCreate",
      method: "POST",
      path: "/trade/clearance",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceRead": createHandler({
      operationId: "/trade/clearanceRead",
      method: "GET",
      path: "/trade/clearance",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceUpdate": createHandler({
      operationId: "/trade/clearanceUpdate",
      method: "PUT",
      path: "/trade/clearance",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceDelete": createHandler({
      operationId: "/trade/clearanceDelete",
      method: "DELETE",
      path: "/trade/clearance/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceReadById": createHandler({
      operationId: "/trade/clearanceReadById",
      method: "GET",
      path: "/trade/clearance/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceItemCreate": createHandler({
      operationId: "/trade/clearanceItemCreate",
      method: "POST",
      path: "/trade/clearanceItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceItemRead": createHandler({
      operationId: "/trade/clearanceItemRead",
      method: "GET",
      path: "/trade/clearanceItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceItemUpdate": createHandler({
      operationId: "/trade/clearanceItemUpdate",
      method: "PUT",
      path: "/trade/clearanceItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceItemDelete": createHandler({
      operationId: "/trade/clearanceItemDelete",
      method: "DELETE",
      path: "/trade/clearanceItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceItemReadById": createHandler({
      operationId: "/trade/clearanceItemReadById",
      method: "GET",
      path: "/trade/clearanceItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceOpApprove": createHandler({
      operationId: "/trade/clearanceOpApprove",
      method: "POST",
      path: "/trade/clearanceOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceOpApproveRevert": createHandler({
      operationId: "/trade/clearanceOpApproveRevert",
      method: "POST",
      path: "/trade/clearanceOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceOpPrepare": createHandler({
      operationId: "/trade/clearanceOpPrepare",
      method: "POST",
      path: "/trade/clearanceOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/clearanceOpPrepareRevert": createHandler({
      operationId: "/trade/clearanceOpPrepareRevert",
      method: "POST",
      path: "/trade/clearanceOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractCreate": createHandler({
      operationId: "/trade/contractCreate",
      method: "POST",
      path: "/trade/contract",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractRead": createHandler({
      operationId: "/trade/contractRead",
      method: "GET",
      path: "/trade/contract",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractUpdate": createHandler({
      operationId: "/trade/contractUpdate",
      method: "PUT",
      path: "/trade/contract",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractDelete": createHandler({
      operationId: "/trade/contractDelete",
      method: "DELETE",
      path: "/trade/contract/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractReadById": createHandler({
      operationId: "/trade/contractReadById",
      method: "GET",
      path: "/trade/contract/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractItemCreate": createHandler({
      operationId: "/trade/contractItemCreate",
      method: "POST",
      path: "/trade/contractItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractItemRead": createHandler({
      operationId: "/trade/contractItemRead",
      method: "GET",
      path: "/trade/contractItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractItemUpdate": createHandler({
      operationId: "/trade/contractItemUpdate",
      method: "PUT",
      path: "/trade/contractItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractItemDelete": createHandler({
      operationId: "/trade/contractItemDelete",
      method: "DELETE",
      path: "/trade/contractItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractItemReadById": createHandler({
      operationId: "/trade/contractItemReadById",
      method: "GET",
      path: "/trade/contractItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractOpApprove": createHandler({
      operationId: "/trade/contractOpApprove",
      method: "POST",
      path: "/trade/contractOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractOpApproveRevert": createHandler({
      operationId: "/trade/contractOpApproveRevert",
      method: "POST",
      path: "/trade/contractOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractOpPrepare": createHandler({
      operationId: "/trade/contractOpPrepare",
      method: "POST",
      path: "/trade/contractOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractOpPrepareRevert": createHandler({
      operationId: "/trade/contractOpPrepareRevert",
      method: "POST",
      path: "/trade/contractOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentCreate": createHandler({
      operationId: "/trade/contractPaymentCreate",
      method: "POST",
      path: "/trade/contractPayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentRead": createHandler({
      operationId: "/trade/contractPaymentRead",
      method: "GET",
      path: "/trade/contractPayment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentUpdate": createHandler({
      operationId: "/trade/contractPaymentUpdate",
      method: "PUT",
      path: "/trade/contractPayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentDelete": createHandler({
      operationId: "/trade/contractPaymentDelete",
      method: "DELETE",
      path: "/trade/contractPayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentReadById": createHandler({
      operationId: "/trade/contractPaymentReadById",
      method: "GET",
      path: "/trade/contractPayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentOpApprove": createHandler({
      operationId: "/trade/contractPaymentOpApprove",
      method: "POST",
      path: "/trade/contractPaymentOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentOpApproveRevert": createHandler({
      operationId: "/trade/contractPaymentOpApproveRevert",
      method: "POST",
      path: "/trade/contractPaymentOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentOpPrepare": createHandler({
      operationId: "/trade/contractPaymentOpPrepare",
      method: "POST",
      path: "/trade/contractPaymentOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/contractPaymentOpPrepareRevert": createHandler({
      operationId: "/trade/contractPaymentOpPrepareRevert",
      method: "POST",
      path: "/trade/contractPaymentOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costCreate": createHandler({
      operationId: "/trade/costCreate",
      method: "POST",
      path: "/trade/cost",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costRead": createHandler({
      operationId: "/trade/costRead",
      method: "GET",
      path: "/trade/cost",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costUpdate": createHandler({
      operationId: "/trade/costUpdate",
      method: "PUT",
      path: "/trade/cost",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costDelete": createHandler({
      operationId: "/trade/costDelete",
      method: "DELETE",
      path: "/trade/cost/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costReadById": createHandler({
      operationId: "/trade/costReadById",
      method: "GET",
      path: "/trade/cost/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costAllocationCreate": createHandler({
      operationId: "/trade/costAllocationCreate",
      method: "POST",
      path: "/trade/costAllocation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costAllocationRead": createHandler({
      operationId: "/trade/costAllocationRead",
      method: "GET",
      path: "/trade/costAllocation",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costAllocationUpdate": createHandler({
      operationId: "/trade/costAllocationUpdate",
      method: "PUT",
      path: "/trade/costAllocation",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costAllocationDelete": createHandler({
      operationId: "/trade/costAllocationDelete",
      method: "DELETE",
      path: "/trade/costAllocation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/costAllocationReadById": createHandler({
      operationId: "/trade/costAllocationReadById",
      method: "GET",
      path: "/trade/costAllocation/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractCreate": createHandler({
      operationId: "/trade/exchangeContractCreate",
      method: "POST",
      path: "/trade/exchangeContract",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractRead": createHandler({
      operationId: "/trade/exchangeContractRead",
      method: "GET",
      path: "/trade/exchangeContract",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractUpdate": createHandler({
      operationId: "/trade/exchangeContractUpdate",
      method: "PUT",
      path: "/trade/exchangeContract",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractDelete": createHandler({
      operationId: "/trade/exchangeContractDelete",
      method: "DELETE",
      path: "/trade/exchangeContract/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractReadById": createHandler({
      operationId: "/trade/exchangeContractReadById",
      method: "GET",
      path: "/trade/exchangeContract/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractOpApprove": createHandler({
      operationId: "/trade/exchangeContractOpApprove",
      method: "POST",
      path: "/trade/exchangeContractOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractOpApproveRevert": createHandler({
      operationId: "/trade/exchangeContractOpApproveRevert",
      method: "POST",
      path: "/trade/exchangeContractOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractOpPrepare": createHandler({
      operationId: "/trade/exchangeContractOpPrepare",
      method: "POST",
      path: "/trade/exchangeContractOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractOpPrepareRevert": createHandler({
      operationId: "/trade/exchangeContractOpPrepareRevert",
      method: "POST",
      path: "/trade/exchangeContractOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentCreate": createHandler({
      operationId: "/trade/exchangeContractPaymentCreate",
      method: "POST",
      path: "/trade/exchangeContractPayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentRead": createHandler({
      operationId: "/trade/exchangeContractPaymentRead",
      method: "GET",
      path: "/trade/exchangeContractPayment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentUpdate": createHandler({
      operationId: "/trade/exchangeContractPaymentUpdate",
      method: "PUT",
      path: "/trade/exchangeContractPayment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentDelete": createHandler({
      operationId: "/trade/exchangeContractPaymentDelete",
      method: "DELETE",
      path: "/trade/exchangeContractPayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentReadById": createHandler({
      operationId: "/trade/exchangeContractPaymentReadById",
      method: "GET",
      path: "/trade/exchangeContractPayment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentOpApprove": createHandler({
      operationId: "/trade/exchangeContractPaymentOpApprove",
      method: "POST",
      path: "/trade/exchangeContractPaymentOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentOpApproveRevert": createHandler({
      operationId: "/trade/exchangeContractPaymentOpApproveRevert",
      method: "POST",
      path: "/trade/exchangeContractPaymentOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentOpPrepare": createHandler({
      operationId: "/trade/exchangeContractPaymentOpPrepare",
      method: "POST",
      path: "/trade/exchangeContractPaymentOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractPaymentOpPrepareRevert": createHandler({
      operationId: "/trade/exchangeContractPaymentOpPrepareRevert",
      method: "POST",
      path: "/trade/exchangeContractPaymentOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractProfileCreate": createHandler({
      operationId: "/trade/exchangeContractProfileCreate",
      method: "POST",
      path: "/trade/exchangeContractProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractProfileRead": createHandler({
      operationId: "/trade/exchangeContractProfileRead",
      method: "GET",
      path: "/trade/exchangeContractProfile",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractProfileUpdate": createHandler({
      operationId: "/trade/exchangeContractProfileUpdate",
      method: "PUT",
      path: "/trade/exchangeContractProfile",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractProfileDelete": createHandler({
      operationId: "/trade/exchangeContractProfileDelete",
      method: "DELETE",
      path: "/trade/exchangeContractProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/exchangeContractProfileReadById": createHandler({
      operationId: "/trade/exchangeContractProfileReadById",
      method: "GET",
      path: "/trade/exchangeContractProfile/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentCreate": createHandler({
      operationId: "/trade/shipmentCreate",
      method: "POST",
      path: "/trade/shipment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentRead": createHandler({
      operationId: "/trade/shipmentRead",
      method: "GET",
      path: "/trade/shipment",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentUpdate": createHandler({
      operationId: "/trade/shipmentUpdate",
      method: "PUT",
      path: "/trade/shipment",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentDelete": createHandler({
      operationId: "/trade/shipmentDelete",
      method: "DELETE",
      path: "/trade/shipment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentReadById": createHandler({
      operationId: "/trade/shipmentReadById",
      method: "GET",
      path: "/trade/shipment/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentContainerCreate": createHandler({
      operationId: "/trade/shipmentContainerCreate",
      method: "POST",
      path: "/trade/shipmentContainer",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentContainerRead": createHandler({
      operationId: "/trade/shipmentContainerRead",
      method: "GET",
      path: "/trade/shipmentContainer",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentContainerUpdate": createHandler({
      operationId: "/trade/shipmentContainerUpdate",
      method: "PUT",
      path: "/trade/shipmentContainer",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentContainerDelete": createHandler({
      operationId: "/trade/shipmentContainerDelete",
      method: "DELETE",
      path: "/trade/shipmentContainer/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentContainerReadById": createHandler({
      operationId: "/trade/shipmentContainerReadById",
      method: "GET",
      path: "/trade/shipmentContainer/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentItemCreate": createHandler({
      operationId: "/trade/shipmentItemCreate",
      method: "POST",
      path: "/trade/shipmentItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentItemRead": createHandler({
      operationId: "/trade/shipmentItemRead",
      method: "GET",
      path: "/trade/shipmentItem",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentItemUpdate": createHandler({
      operationId: "/trade/shipmentItemUpdate",
      method: "PUT",
      path: "/trade/shipmentItem",
      hasBody: true,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentItemDelete": createHandler({
      operationId: "/trade/shipmentItemDelete",
      method: "DELETE",
      path: "/trade/shipmentItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentItemReadById": createHandler({
      operationId: "/trade/shipmentItemReadById",
      method: "GET",
      path: "/trade/shipmentItem/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentOpApprove": createHandler({
      operationId: "/trade/shipmentOpApprove",
      method: "POST",
      path: "/trade/shipmentOpApprove/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentOpApproveRevert": createHandler({
      operationId: "/trade/shipmentOpApproveRevert",
      method: "POST",
      path: "/trade/shipmentOpApproveRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentOpPrepare": createHandler({
      operationId: "/trade/shipmentOpPrepare",
      method: "POST",
      path: "/trade/shipmentOpPrepare/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    }),
    "/trade/shipmentOpPrepareRevert": createHandler({
      operationId: "/trade/shipmentOpPrepareRevert",
      method: "POST",
      path: "/trade/shipmentOpPrepareRevert/{id}",
      hasBody: false,
      security: {
        auth: true,
        tenant: true,
      },
    })
  }
};
