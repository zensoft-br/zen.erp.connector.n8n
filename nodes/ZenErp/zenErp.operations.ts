import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { request } from '../../transport/request';
import {
  resolveRequestBody,
  resolveQueryParams,
  resolvePathParams,
} from './helpers';

export const operations: Record<string, Record<string, (this: IExecuteFunctions, i: number) => Promise<INodeExecutionData[]>>> = {

  "auth": {

    "/auth/login": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_login';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/auth/login`,
        qs,
        body,
      });
    },
    "/auth/logout": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_logout';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/auth/logout`,
        qs,
        
      });
    },
    "/auth/me": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_me';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/auth/me`,
        qs,
        
      });
    },
    "/auth/passwordRecover": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_passwordRecover';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/auth/passwordRecover`,
        qs,
        
      });
    },
    "/auth/passwordReset": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_passwordReset';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/auth/passwordReset`,
        qs,
        
      });
    },
    "/auth/refresh": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_refresh';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/auth/refresh`,
        qs,
        
      });
    },
    "/auth/register": async function (this: IExecuteFunctions, i: number) {
      const opId = 'auth_register';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/auth/register`,
        qs,
        body,
      });
    }
  },
  "catalog": {

    "/catalog/categoryCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_categoryCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/category`,
        qs,
        body,
      });
    },
    "/catalog/categoryRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_categoryRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/category`,
        qs,
        
      });
    },
    "/catalog/categoryUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_categoryUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/category`,
        qs,
        body,
      });
    },
    "/catalog/categoryDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_categoryDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/category/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/categoryReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_categoryReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/category/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "catalog/company": {

    "/catalog/company/companyCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/company/company`,
        qs,
        body,
      });
    },
    "/catalog/company/companyRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/company/company`,
        qs,
        
      });
    },
    "/catalog/company/companyUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/company/company`,
        qs,
        body,
      });
    },
    "/catalog/company/companyDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/company/company/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/company/companyReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/company/company/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/company/companyOpGetActive": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyOpGetActive';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/company/companyOpGetActive`,
        qs,
        
      });
    },
    "/catalog/company/companyOpSetActive": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_companyOpSetActive';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/company/companyOpSetActive/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/company/societyCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_societyCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/company/society`,
        qs,
        body,
      });
    },
    "/catalog/company/societyRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_societyRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/company/society`,
        qs,
        
      });
    },
    "/catalog/company/societyUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_societyUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/company/society`,
        qs,
        body,
      });
    },
    "/catalog/company/societyDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_societyDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/company/society/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/company/societyReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_company_societyReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/company/society/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "catalog/location": {

    "/catalog/location/cityCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_cityCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/location/city`,
        qs,
        body,
      });
    },
    "/catalog/location/cityRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_cityRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/city`,
        qs,
        
      });
    },
    "/catalog/location/cityUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_cityUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/location/city`,
        qs,
        body,
      });
    },
    "/catalog/location/cityDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_cityDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/location/city/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/location/cityReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_cityReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/city/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/location/cityOpFind": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_cityOpFind';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/location/cityOpFind`,
        qs,
        body,
      });
    },
    "/catalog/location/countryCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_countryCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/location/country`,
        qs,
        body,
      });
    },
    "/catalog/location/countryRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_countryRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/country`,
        qs,
        
      });
    },
    "/catalog/location/countryUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_countryUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/location/country`,
        qs,
        body,
      });
    },
    "/catalog/location/countryDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_countryDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/location/country/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/location/countryReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_countryReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/country/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/location/geocodeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_geocodeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/geocode`,
        qs,
        
      });
    },
    "/catalog/location/stateCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_stateCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/location/state`,
        qs,
        body,
      });
    },
    "/catalog/location/stateRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_stateRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/state`,
        qs,
        
      });
    },
    "/catalog/location/stateUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_stateUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/location/state`,
        qs,
        body,
      });
    },
    "/catalog/location/stateDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_stateDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/location/state/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/location/stateReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_stateReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/state/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/location/zipcodeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_location_zipcodeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/location/zipcode`,
        qs,
        
      });
    }
  },
  "catalog/person": {

    "/catalog/person/personCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/person`,
        qs,
        body,
      });
    },
    "/catalog/person/personRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/person`,
        qs,
        
      });
    },
    "/catalog/person/personUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/person/person`,
        qs,
        body,
      });
    },
    "/catalog/person/personDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/person/person/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/person/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personAddressCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personAddressCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personAddress`,
        qs,
        body,
      });
    },
    "/catalog/person/personAddressRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personAddressRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personAddress`,
        qs,
        
      });
    },
    "/catalog/person/personAddressUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personAddressUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/person/personAddress`,
        qs,
        body,
      });
    },
    "/catalog/person/personAddressDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personAddressDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/person/personAddress/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personAddressReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personAddressReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personAddress/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personAddressOpSetDefault": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personAddressOpSetDefault';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personAddressOpSetDefault/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personCommentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCommentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personComment`,
        qs,
        body,
      });
    },
    "/catalog/person/personCommentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCommentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personComment`,
        qs,
        
      });
    },
    "/catalog/person/personCommentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCommentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/person/personComment`,
        qs,
        body,
      });
    },
    "/catalog/person/personCommentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCommentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/person/personComment/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personCommentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCommentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personComment/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personCompactRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCompactRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personCompact`,
        qs,
        
      });
    },
    "/catalog/person/personCompactReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personCompactReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personCompact/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personContactCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personContactCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personContact`,
        qs,
        body,
      });
    },
    "/catalog/person/personContactRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personContactRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personContact`,
        qs,
        
      });
    },
    "/catalog/person/personContactUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personContactUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/person/personContact`,
        qs,
        body,
      });
    },
    "/catalog/person/personContactDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personContactDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/person/personContact/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personContactReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personContactReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personContact/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personDocumentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personDocumentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personDocument`,
        qs,
        body,
      });
    },
    "/catalog/person/personDocumentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personDocumentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personDocument`,
        qs,
        
      });
    },
    "/catalog/person/personDocumentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personDocumentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/person/personDocument`,
        qs,
        body,
      });
    },
    "/catalog/person/personDocumentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personDocumentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/person/personDocument/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personDocumentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personDocumentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personDocument/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personGroupCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personGroupCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personGroup`,
        qs,
        body,
      });
    },
    "/catalog/person/personGroupRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personGroupRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personGroup`,
        qs,
        
      });
    },
    "/catalog/person/personGroupUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personGroupUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/person/personGroup`,
        qs,
        body,
      });
    },
    "/catalog/person/personGroupDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personGroupDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/person/personGroup/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personGroupReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personGroupReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/person/personGroup/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/person/personOpReadFromPersonDirectory": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_person_personOpReadFromPersonDirectory';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/person/personOpReadFromPersonDirectory`,
        qs,
        
      });
    }
  },
  "catalog/product": {

    "/catalog/product/codeConversionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/codeConversion`,
        qs,
        body,
      });
    },
    "/catalog/product/codeConversionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/codeConversion`,
        qs,
        
      });
    },
    "/catalog/product/codeConversionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/codeConversion`,
        qs,
        body,
      });
    },
    "/catalog/product/codeConversionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/codeConversion/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/codeConversionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/codeConversion/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/codeConversionListCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionListCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/codeConversionList`,
        qs,
        body,
      });
    },
    "/catalog/product/codeConversionListRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionListRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/codeConversionList`,
        qs,
        
      });
    },
    "/catalog/product/codeConversionListUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionListUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/codeConversionList`,
        qs,
        body,
      });
    },
    "/catalog/product/codeConversionListDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionListDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/codeConversionList/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/codeConversionListReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_codeConversionListReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/codeConversionList/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/dimensionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_dimensionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/dimension`,
        qs,
        body,
      });
    },
    "/catalog/product/dimensionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_dimensionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/dimension`,
        qs,
        
      });
    },
    "/catalog/product/dimensionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_dimensionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/dimension`,
        qs,
        body,
      });
    },
    "/catalog/product/dimensionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_dimensionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/dimension/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/dimensionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_dimensionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/dimension/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/product`,
        qs,
        body,
      });
    },
    "/catalog/product/productRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/product`,
        qs,
        
      });
    },
    "/catalog/product/productUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/product`,
        qs,
        body,
      });
    },
    "/catalog/product/productDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/product/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/product/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productKitComponentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productKitComponentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productKitComponent`,
        qs,
        body,
      });
    },
    "/catalog/product/productKitComponentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productKitComponentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productKitComponent`,
        qs,
        
      });
    },
    "/catalog/product/productKitComponentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productKitComponentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/productKitComponent`,
        qs,
        body,
      });
    },
    "/catalog/product/productKitComponentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productKitComponentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/productKitComponent/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productKitComponentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productKitComponentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productKitComponent/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productOpClone/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/catalog/product/productOpConvertToUnit": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productOpConvertToUnit';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productOpConvertToUnit/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productPackingCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productPackingCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productPacking`,
        qs,
        body,
      });
    },
    "/catalog/product/productPackingRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productPackingRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productPacking`,
        qs,
        
      });
    },
    "/catalog/product/productPackingUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productPackingUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/productPacking`,
        qs,
        body,
      });
    },
    "/catalog/product/productPackingDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productPackingDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/productPacking/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productPackingReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productPackingReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productPacking/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productPackingOpConvertToUnit": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productPackingOpConvertToUnit';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productPackingOpConvertToUnit/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productProfile`,
        qs,
        body,
      });
    },
    "/catalog/product/productProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productProfile`,
        qs,
        
      });
    },
    "/catalog/product/productProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/productProfile`,
        qs,
        body,
      });
    },
    "/catalog/product/productProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/productProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productUnitConversionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productUnitConversionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productUnitConversion`,
        qs,
        body,
      });
    },
    "/catalog/product/productUnitConversionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productUnitConversionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productUnitConversion`,
        qs,
        
      });
    },
    "/catalog/product/productUnitConversionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productUnitConversionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/productUnitConversion`,
        qs,
        body,
      });
    },
    "/catalog/product/productUnitConversionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productUnitConversionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/productUnitConversion/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productUnitConversionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productUnitConversionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productUnitConversion/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productVariantCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productVariantCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/productVariant`,
        qs,
        body,
      });
    },
    "/catalog/product/productVariantRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productVariantRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productVariant`,
        qs,
        
      });
    },
    "/catalog/product/productVariantUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productVariantUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/productVariant`,
        qs,
        body,
      });
    },
    "/catalog/product/productVariantDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productVariantDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/productVariant/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/productVariantReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_productVariantReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/productVariant/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/unitCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_unitCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/catalog/product/unit`,
        qs,
        body,
      });
    },
    "/catalog/product/unitRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_unitRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/unit`,
        qs,
        
      });
    },
    "/catalog/product/unitUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_unitUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/catalog/product/unit`,
        qs,
        body,
      });
    },
    "/catalog/product/unitDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_unitDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/catalog/product/unit/${pathParams.id}`,
        qs,
        
      });
    },
    "/catalog/product/unitReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'catalog_product_unitReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/catalog/product/unit/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "commercial/contract": {

    "/commercial/contract/contractCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contract`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contract`,
        qs,
        
      });
    },
    "/commercial/contract/contractUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/contract/contract`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/contract/contract/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contract/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBilling`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractBillingRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractBilling`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/contract/contractBilling`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractBillingDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/contract/contractBilling/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractBilling/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpCreate';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpCreate`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpCreateInvoice": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpCreateInvoice';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpCreateInvoice`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractBillingOpCreateInvoiceRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpCreateInvoiceRevert';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpCreateInvoiceRevert`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpCreateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpCreateRevert';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpCreateRevert`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractBillingOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractBillingOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractBillingOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractIndexCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractIndexCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractIndex`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractIndexRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractIndexRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractIndex`,
        qs,
        
      });
    },
    "/commercial/contract/contractIndexUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractIndexUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/contract/contractIndex`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractIndexDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractIndexDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/contract/contractIndex/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractIndexReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractIndexReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractIndex/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractItem`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractItem`,
        qs,
        
      });
    },
    "/commercial/contract/contractItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/contract/contractItem`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/contract/contractItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpAdjust": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpAdjust';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpAdjust/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpCancel/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpCancelRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpCancelRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpCancelRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpCreate`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/contract/contractProfile`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractProfile`,
        qs,
        
      });
    },
    "/commercial/contract/contractProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/contract/contractProfile`,
        qs,
        body,
      });
    },
    "/commercial/contract/contractProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/contract/contractProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/contract/contractProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_contract_contractProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/contract/contractProfile/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "commercial": {

    "/commercial/personHierarchyCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_personHierarchyCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/personHierarchy`,
        qs,
        body,
      });
    },
    "/commercial/personHierarchyRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_personHierarchyRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/personHierarchy`,
        qs,
        
      });
    },
    "/commercial/personHierarchyUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_personHierarchyUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/personHierarchy`,
        qs,
        body,
      });
    },
    "/commercial/personHierarchyDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_personHierarchyDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/personHierarchy/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/personHierarchyReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_personHierarchyReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/personHierarchy/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/personHierarchyViewRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_personHierarchyViewRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/personHierarchyView`,
        qs,
        
      });
    },
    "/commercial/priceListChangeRequestCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListChangeRequestCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/priceListChangeRequest`,
        qs,
        body,
      });
    },
    "/commercial/priceListChangeRequestRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListChangeRequestRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/priceListChangeRequest`,
        qs,
        
      });
    },
    "/commercial/priceListChangeRequestDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListChangeRequestDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/priceListChangeRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListChangeRequestReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListChangeRequestReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/priceListChangeRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListChangeRequestOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListChangeRequestOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/priceListChangeRequestOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListChangeRequestOpReject": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListChangeRequestOpReject';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/priceListChangeRequestOpReject/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListOpFind": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListOpFind';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/priceListOpFind/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListTransformationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListTransformationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/priceListTransformation`,
        qs,
        body,
      });
    },
    "/commercial/priceListTransformationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListTransformationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/priceListTransformation`,
        qs,
        
      });
    },
    "/commercial/priceListTransformationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListTransformationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/priceListTransformation`,
        qs,
        body,
      });
    },
    "/commercial/priceListTransformationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListTransformationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/priceListTransformation/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListTransformationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListTransformationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/priceListTransformation/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/priceListTransformationOpCalculate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_priceListTransformationOpCalculate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/priceListTransformationOpCalculate/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "commercial/target": {

    "/commercial/target/targetCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/target/target`,
        qs,
        body,
      });
    },
    "/commercial/target/targetRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/target`,
        qs,
        
      });
    },
    "/commercial/target/targetUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/target/target`,
        qs,
        body,
      });
    },
    "/commercial/target/targetDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/target/target/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/target/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetGroupCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetGroupCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/target/targetGroup`,
        qs,
        body,
      });
    },
    "/commercial/target/targetGroupRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetGroupRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/targetGroup`,
        qs,
        
      });
    },
    "/commercial/target/targetGroupUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetGroupUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/target/targetGroup`,
        qs,
        body,
      });
    },
    "/commercial/target/targetGroupDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetGroupDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/target/targetGroup/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetGroupReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetGroupReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/targetGroup/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetIntervalCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetIntervalCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/target/targetInterval`,
        qs,
        body,
      });
    },
    "/commercial/target/targetIntervalRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetIntervalRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/targetInterval`,
        qs,
        
      });
    },
    "/commercial/target/targetIntervalUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetIntervalUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/target/targetInterval`,
        qs,
        body,
      });
    },
    "/commercial/target/targetIntervalDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetIntervalDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/target/targetInterval/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetIntervalReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetIntervalReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/targetInterval/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetPlanCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetPlanCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/commercial/target/targetPlan`,
        qs,
        body,
      });
    },
    "/commercial/target/targetPlanRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetPlanRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/targetPlan`,
        qs,
        
      });
    },
    "/commercial/target/targetPlanUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetPlanUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/commercial/target/targetPlan`,
        qs,
        body,
      });
    },
    "/commercial/target/targetPlanDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetPlanDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/commercial/target/targetPlan/${pathParams.id}`,
        qs,
        
      });
    },
    "/commercial/target/targetPlanReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'commercial_target_targetPlanReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/commercial/target/targetPlan/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "financial/accounting": {

    "/financial/accounting/accountCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/account`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/account`,
        qs,
        
      });
    },
    "/financial/accounting/accountUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/account`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/account/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/account/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountCategoryCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountCategoryCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountCategory`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountCategoryRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountCategoryRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountCategory`,
        qs,
        
      });
    },
    "/financial/accounting/accountCategoryUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountCategoryUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/accountCategory`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountCategoryDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountCategoryDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/accountCategory/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountCategoryReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountCategoryReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountCategory/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChart`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountChartRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountChart`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/accountChart`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountChartDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/accountChart/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountChart/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChartOpClone/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartOpImport": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartOpImport';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChartOpImport/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountChartOpLevelCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartOpLevelCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChartOpLevelCreate/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartOpLevelDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartOpLevelDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChartOpLevelDelete/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartOpLevelUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartOpLevelUpdate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChartOpLevelUpdate/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountChartOpNextShortCode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountChartOpNextShortCode';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountChartOpNextShortCode/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountConversionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountConversion`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountConversionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountConversion`,
        qs,
        
      });
    },
    "/financial/accounting/accountConversionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/accountConversion`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountConversionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/accountConversion/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountConversionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountConversion/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountConversionChartCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionChartCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountConversionChart`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountConversionChartRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionChartRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountConversionChart`,
        qs,
        
      });
    },
    "/financial/accounting/accountConversionChartUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionChartUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/accountConversionChart`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountConversionChartDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionChartDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/accountConversionChart/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountConversionChartReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountConversionChartReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountConversionChart/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountDefaultCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDefaultCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountDefault`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountDefaultRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDefaultRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountDefault`,
        qs,
        
      });
    },
    "/financial/accounting/accountDefaultUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDefaultUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/accountDefault`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountDefaultDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDefaultDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/accountDefault/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountDefaultReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDefaultReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountDefault/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/accountDefaultOpRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountDefaultOpRead';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/accountDefaultOpRead`,
        qs,
        body,
      });
    },
    "/financial/accounting/accountFiscalYearRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_accountFiscalYearRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/accountFiscalYear`,
        qs,
        
      });
    },
    "/financial/accounting/assetInventoryRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_assetInventoryRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/assetInventory`,
        qs,
        
      });
    },
    "/financial/accounting/assetInventoryCurrentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_assetInventoryCurrentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/assetInventoryCurrent`,
        qs,
        
      });
    },
    "/financial/accounting/assetTagRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_assetTagRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/assetTag`,
        qs,
        
      });
    },
    "/financial/accounting/assetTagReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_assetTagReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/assetTag/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/fiscalYearOpClose": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_fiscalYearOpClose';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/fiscalYearOpClose/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/journalEntryCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/journalEntry`,
        qs,
        body,
      });
    },
    "/financial/accounting/journalEntryRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/journalEntry`,
        qs,
        
      });
    },
    "/financial/accounting/journalEntryUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/journalEntry`,
        qs,
        body,
      });
    },
    "/financial/accounting/journalEntryDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/journalEntry/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/journalEntryReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/journalEntry/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/journalEntryOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/journalEntryOpCreate`,
        qs,
        body,
      });
    },
    "/financial/accounting/journalEntryOpPublish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryOpPublish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/journalEntryOpPublish/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/journalEntryOpPublishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryOpPublishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/journalEntryOpPublishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/journalEntryOpUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalEntryOpUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/journalEntryOpUpdate`,
        qs,
        body,
      });
    },
    "/financial/accounting/journalItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/journalItem`,
        qs,
        body,
      });
    },
    "/financial/accounting/journalItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/journalItem`,
        qs,
        
      });
    },
    "/financial/accounting/journalItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/journalItem`,
        qs,
        body,
      });
    },
    "/financial/accounting/journalItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/journalItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/journalItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_journalItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/journalItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/ledgerItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_ledgerItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/ledgerItem`,
        qs,
        
      });
    },
    "/financial/accounting/ledgerItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_ledgerItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/ledgerItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/ledgerItemBalanceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_ledgerItemBalanceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/ledgerItemBalance`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/resultCenter`,
        qs,
        body,
      });
    },
    "/financial/accounting/resultCenterRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/resultCenter`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/resultCenter`,
        qs,
        body,
      });
    },
    "/financial/accounting/resultCenterDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/resultCenter/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/resultCenter/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterChartCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/resultCenterChart`,
        qs,
        body,
      });
    },
    "/financial/accounting/resultCenterChartRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/resultCenterChart`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterChartUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/accounting/resultCenterChart`,
        qs,
        body,
      });
    },
    "/financial/accounting/resultCenterChartDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/accounting/resultCenterChart/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterChartReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/accounting/resultCenterChart/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterChartOpLevelCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartOpLevelCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/resultCenterChartOpLevelCreate/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterChartOpLevelDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartOpLevelDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/resultCenterChartOpLevelDelete/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/accounting/resultCenterChartOpLevelUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_accounting_resultCenterChartOpLevelUpdate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/accounting/resultCenterChartOpLevelUpdate/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "financial/billing": {

    "/financial/billing/batchRequestCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequest`,
        qs,
        body,
      });
    },
    "/financial/billing/batchRequestRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/batchRequest`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/billing/batchRequest`,
        qs,
        body,
      });
    },
    "/financial/billing/batchRequestDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/billing/batchRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/batchRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpAddInstructions": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpAddInstructions';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpAddInstructions/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/billing/batchRequestOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpCreateFile": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpCreateFile';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpCreateFile/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpSend": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpSend';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpSend/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchRequestOpSendRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchRequestOpSendRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchRequestOpSendRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/batchResponse`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/billing/batchResponse/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/batchResponse/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchResponseOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchResponseOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchResponseOpCreate`,
        qs,
        body,
      });
    },
    "/financial/billing/batchResponseOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchResponseOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchResponseOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/batchResponseOpProcess": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_batchResponseOpProcess';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/batchResponseOpProcess/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/instructionRequest`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/billing/instructionRequest`,
        qs,
        body,
      });
    },
    "/financial/billing/instructionRequestDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/billing/instructionRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/instructionRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestOpAddToBatch": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestOpAddToBatch';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionRequestOpAddToBatch/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionRequestOpCreate`,
        qs,
        body,
      });
    },
    "/financial/billing/instructionRequestOpCreateChangeDueDate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestOpCreateChangeDueDate';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionRequestOpCreateChangeDueDate`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestOpCreateRegister": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestOpCreateRegister';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionRequestOpCreateRegister`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestOpCreateUnregister": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestOpCreateUnregister';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionRequestOpCreateUnregister`,
        qs,
        
      });
    },
    "/financial/billing/instructionRequestOpRemoveFromBatch": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionRequestOpRemoveFromBatch';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionRequestOpRemoveFromBatch/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionResponseCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionResponse`,
        qs,
        body,
      });
    },
    "/financial/billing/instructionResponseRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/instructionResponse`,
        qs,
        
      });
    },
    "/financial/billing/instructionResponseUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/billing/instructionResponse`,
        qs,
        body,
      });
    },
    "/financial/billing/instructionResponseDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/billing/instructionResponse/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionResponseReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/instructionResponse/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionResponseOpIgnore": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseOpIgnore';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionResponseOpIgnore/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionResponseOpIgnoreRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseOpIgnoreRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionResponseOpIgnoreRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/instructionResponseOpProcess": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_instructionResponseOpProcess';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/instructionResponseOpProcess/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/walletCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_walletCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/wallet`,
        qs,
        body,
      });
    },
    "/financial/billing/walletRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_walletRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/wallet`,
        qs,
        
      });
    },
    "/financial/billing/walletUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_walletUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/billing/wallet`,
        qs,
        body,
      });
    },
    "/financial/billing/walletDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_walletDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/billing/wallet/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/walletReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_walletReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/billing/wallet/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/billing/walletOpGetSequence": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_billing_walletOpGetSequence';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/billing/walletOpGetSequence/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "financial/credit": {

    "/financial/credit/creditLineCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/credit/creditLine`,
        qs,
        body,
      });
    },
    "/financial/credit/creditLineRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/credit/creditLine`,
        qs,
        
      });
    },
    "/financial/credit/creditLineUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/credit/creditLine`,
        qs,
        body,
      });
    },
    "/financial/credit/creditLineDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/credit/creditLine/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/credit/creditLineReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/credit/creditLine/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/credit/creditLineItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/credit/creditLineItem`,
        qs,
        body,
      });
    },
    "/financial/credit/creditLineItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/credit/creditLineItem`,
        qs,
        
      });
    },
    "/financial/credit/creditLineItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/credit/creditLineItem`,
        qs,
        body,
      });
    },
    "/financial/credit/creditLineItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/credit/creditLineItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/credit/creditLineItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_credit_creditLineItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/credit/creditLineItem/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "financial": {

    "/financial/currencyCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/currency`,
        qs,
        body,
      });
    },
    "/financial/currencyRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/currency`,
        qs,
        
      });
    },
    "/financial/currencyUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/currency`,
        qs,
        body,
      });
    },
    "/financial/currencyDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/currency/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/currencyReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/currency/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/currencyExchangeRateCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/currencyExchangeRate`,
        qs,
        body,
      });
    },
    "/financial/currencyExchangeRateRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/currencyExchangeRate`,
        qs,
        
      });
    },
    "/financial/currencyExchangeRateUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/currencyExchangeRate`,
        qs,
        body,
      });
    },
    "/financial/currencyExchangeRateDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/currencyExchangeRate/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/currencyExchangeRateReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/currencyExchangeRate/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/currencyExchangeRateOpConvert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateOpConvert';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/currencyExchangeRateOpConvert`,
        qs,
        
      });
    },
    "/financial/currencyExchangeRateOpGetExchangeRate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyExchangeRateOpGetExchangeRate';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/currencyExchangeRateOpGetExchangeRate`,
        qs,
        
      });
    },
    "/financial/currencyOpReadByCode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_currencyOpReadByCode';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/currencyOpReadByCode`,
        qs,
        
      });
    },
    "/financial/payableCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payable`,
        qs,
        body,
      });
    },
    "/financial/payableRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payable`,
        qs,
        
      });
    },
    "/financial/payableUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/payable`,
        qs,
        body,
      });
    },
    "/financial/payableDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/payable/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payable/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableOpChangeWallet": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpChangeWallet';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpChangeWallet/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableOpRepeat": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpRepeat';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpRepeat/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/payableOpSettle": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpSettle';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpSettle`,
        qs,
        body,
      });
    },
    "/financial/payableOpUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpUpdate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpUpdate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/payableOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/payableOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/financial/payableSettlementRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payableSettlement`,
        qs,
        
      });
    },
    "/financial/payableSettlementDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/payableSettlement/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableSettlementReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payableSettlement/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableSettlementBillingTitleRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementBillingTitleRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payableSettlementBillingTitle`,
        qs,
        
      });
    },
    "/financial/payableSettlementBillingTitleReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementBillingTitleReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payableSettlementBillingTitle/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/payableSettlementMethodRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementMethodRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payableSettlementMethod`,
        qs,
        
      });
    },
    "/financial/payableSettlementMethodReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_payableSettlementMethodReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/payableSettlementMethod/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivable`,
        qs,
        body,
      });
    },
    "/financial/receivableRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivable`,
        qs,
        
      });
    },
    "/financial/receivableUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/receivable`,
        qs,
        body,
      });
    },
    "/financial/receivableDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/receivable/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivable/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableOpRepeat": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpRepeat';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpRepeat/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/receivableOpSend": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpSend';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpSend`,
        qs,
        body,
      });
    },
    "/financial/receivableOpSettle": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpSettle';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpSettle`,
        qs,
        body,
      });
    },
    "/financial/receivableOpUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpUpdate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpUpdate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/receivableOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/receivableOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/financial/receivableSettlementRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivableSettlement`,
        qs,
        
      });
    },
    "/financial/receivableSettlementDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/receivableSettlement/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableSettlementReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivableSettlement/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableSettlementBillingTitleRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementBillingTitleRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivableSettlementBillingTitle`,
        qs,
        
      });
    },
    "/financial/receivableSettlementBillingTitleReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementBillingTitleReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivableSettlementBillingTitle/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/receivableSettlementMethodRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementMethodRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivableSettlementMethod`,
        qs,
        
      });
    },
    "/financial/receivableSettlementMethodReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_receivableSettlementMethodReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/receivableSettlementMethod/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "financial/salesCommission": {

    "/financial/salesCommission/salesCommissionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommission`,
        qs,
        body,
      });
    },
    "/financial/salesCommission/salesCommissionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/salesCommission/salesCommission`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/salesCommission/salesCommission`,
        qs,
        body,
      });
    },
    "/financial/salesCommission/salesCommissionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/salesCommission/salesCommission/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/salesCommission/salesCommission/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionOpCalculate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpCalculate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpCalculate`,
        qs,
        body,
      });
    },
    "/financial/salesCommission/salesCommissionOpCalculateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpCalculateRevert';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpCalculateRevert`,
        qs,
        body,
      });
    },
    "/financial/salesCommission/salesCommissionOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionOpPublish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpPublish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpPublish/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/salesCommission/salesCommissionOpPublishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_salesCommission_salesCommissionOpPublishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/salesCommission/salesCommissionOpPublishRevert/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "financial/treasury": {

    "/financial/treasury/accountStatementCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatement`,
        qs,
        body,
      });
    },
    "/financial/treasury/accountStatementRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/treasury/accountStatement`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/financial/treasury/accountStatement`,
        qs,
        body,
      });
    },
    "/financial/treasury/accountStatementDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/financial/treasury/accountStatement/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/financial/treasury/accountStatement/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementOpConsolidate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpConsolidate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpConsolidate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/treasury/accountStatementOpConsolidateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpConsolidateRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpConsolidateRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementOpIdentify": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpIdentify';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpIdentify/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementOpIdentifyRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpIdentifyRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpIdentifyRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementOpIgnore": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpIgnore';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpIgnore/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementOpIgnoreRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpIgnoreRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpIgnoreRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/accountStatementOpSettle": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpSettle';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpSettle/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/financial/treasury/accountStatementOpSettleRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_accountStatementOpSettleRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/accountStatementOpSettleRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/financial/treasury/expenseOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_expenseOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/expenseOpCreate`,
        qs,
        body,
      });
    },
    "/financial/treasury/revenueOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'financial_treasury_revenueOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/financial/treasury/revenueOpCreate`,
        qs,
        body,
      });
    }
  },
  "fiscal/br": {

    "/fiscal/br/dfeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfe`,
        qs,
        
      });
    },
    "/fiscal/br/dfeReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfe/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcInCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcInCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcIn`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeNfeProcInRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcInRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeNfeProcIn`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcInDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcInDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/br/dfeNfeProcIn/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcInReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcInReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeNfeProcIn/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcInOpIncomingInvoiceCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcInOpIncomingInvoiceCreateRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcInOpIncomingInvoiceCreateRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeNfeProcOut`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/br/dfeNfeProcOut/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeNfeProcOut/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpCancel/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeNfeProcOutOpConfirm": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpConfirm';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpConfirm/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutOpCorrect": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpCorrect';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpCorrect/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeNfeProcOutOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpCreate';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpCreate`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutOpDownload": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpDownload';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpDownload`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpOutgoingInvoiceCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpOutgoingInvoiceCreate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeNfeProcOutOpSign": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpSign';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpSign/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutOpSignRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpSignRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpSignRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutOpTransmit": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpTransmit';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpTransmit/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeNfeProcOutOpUpload": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeNfeProcOutOpUpload';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeNfeProcOutOpUpload`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeOpReadContent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeOpReadContent';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeOpReadContent/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeProcEventoNFeInRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcEventoNFeInRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeProcEventoNFeIn`,
        qs,
        
      });
    },
    "/fiscal/br/dfeProcEventoNFeInReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcEventoNFeInReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeProcEventoNFeIn/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeProcEventoNFeOutRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcEventoNFeOutRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeProcEventoNFeOut`,
        qs,
        
      });
    },
    "/fiscal/br/dfeProcEventoNFeOutReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcEventoNFeOutReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeProcEventoNFeOut/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeProcInutNFeCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcInutNFeCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeProcInutNFe`,
        qs,
        body,
      });
    },
    "/fiscal/br/dfeProcInutNFeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcInutNFeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeProcInutNFe`,
        qs,
        
      });
    },
    "/fiscal/br/dfeProcInutNFeReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeProcInutNFeReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeProcInutNFe/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeResEventoRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeResEventoRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeResEvento`,
        qs,
        
      });
    },
    "/fiscal/br/dfeResEventoReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeResEventoReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeResEvento/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeResNFeInRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeResNFeInRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeResNFeIn`,
        qs,
        
      });
    },
    "/fiscal/br/dfeResNFeInReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeResNFeInReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/br/dfeResNFeIn/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/dfeResNFeInOpManifest": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_dfeResNFeInOpManifest';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/dfeResNFeInOpManifest/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/br/documentSefazOpFetch": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_documentSefazOpFetch';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/documentSefazOpFetch`,
        qs,
        body,
      });
    },
    "/fiscal/br/spedOpExport": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_br_spedOpExport';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/br/spedOpExport`,
        qs,
        body,
      });
    }
  },
  "fiscal": {

    "/fiscal/fiscalProfileOperationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileOperationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalProfileOperation`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalProfileOperationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileOperationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalProfileOperation`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfileOperationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileOperationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/fiscalProfileOperation`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalProfileOperationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileOperationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/fiscalProfileOperation/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfileOperationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileOperationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalProfileOperation/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfileOperationOpReadByCode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileOperationOpReadByCode';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalProfileOperationOpReadByCode`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfilePersonCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfilePersonCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalProfilePerson`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalProfilePersonRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfilePersonRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalProfilePerson`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfilePersonUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfilePersonUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/fiscalProfilePerson`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalProfilePersonDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfilePersonDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/fiscalProfilePerson/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfilePersonReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfilePersonReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalProfilePerson/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfileProductCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileProductCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalProfileProduct`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalProfileProductRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileProductRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalProfileProduct`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfileProductUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileProductUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/fiscalProfileProduct`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalProfileProductDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileProductDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/fiscalProfileProduct/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalProfileProductReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalProfileProductReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalProfileProduct/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalRegionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalRegionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalRegion`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalRegionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalRegionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalRegion`,
        qs,
        
      });
    },
    "/fiscal/fiscalRegionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalRegionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/fiscalRegion`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalRegionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalRegionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/fiscalRegion/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalRegionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalRegionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalRegion/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalRegionOpReadByCode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalRegionOpReadByCode';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalRegionOpReadByCode`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalYear`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalYearRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalYear`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/fiscalYear`,
        qs,
        body,
      });
    },
    "/fiscal/fiscalYearDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/fiscalYear/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/fiscalYear/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearOpPartialClosure": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearOpPartialClosure';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalYearOpPartialClosure/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearOpPartialClosureRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearOpPartialClosureRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalYearOpPartialClosureRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearOpPublish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearOpPublish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalYearOpPublish/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearOpPublishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearOpPublishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalYearOpPublishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/fiscalYearOpRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_fiscalYearOpRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/fiscalYearOpRead`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoice`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/incomingInvoice`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/incomingInvoice`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/incomingInvoice/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/incomingInvoice/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceItem`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/incomingInvoiceItem`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/incomingInvoiceItem`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/incomingInvoiceItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/incomingInvoiceItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpApproveDivergences": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpApproveDivergences';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpApproveDivergences/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpCreate`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceOpCreateFromIncomingList": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpCreateFromIncomingList';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpCreateFromIncomingList`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpReject": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpReject';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpReject/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpRejectRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpRejectRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpRejectRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpReturn": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpReturn';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpReturn/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoiceOpTaxationCalc": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpTaxationCalc';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpTaxationCalc/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoiceOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoiceOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoiceOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoicePaymentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoicePaymentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/incomingInvoicePayment`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoicePaymentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoicePaymentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/incomingInvoicePayment`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoicePaymentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoicePaymentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/incomingInvoicePayment`,
        qs,
        body,
      });
    },
    "/fiscal/incomingInvoicePaymentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoicePaymentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/incomingInvoicePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/incomingInvoicePaymentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_incomingInvoicePaymentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/incomingInvoicePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceItemAccountingCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceItemAccountingCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/invoiceItemAccounting`,
        qs,
        body,
      });
    },
    "/fiscal/invoiceItemAccountingRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceItemAccountingRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/invoiceItemAccounting`,
        qs,
        
      });
    },
    "/fiscal/invoiceItemAccountingUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceItemAccountingUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/invoiceItemAccounting`,
        qs,
        body,
      });
    },
    "/fiscal/invoiceItemAccountingDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceItemAccountingDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/invoiceItemAccounting/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceItemAccountingReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceItemAccountingReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/invoiceItemAccounting/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceReferenceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceReferenceCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/invoiceReference`,
        qs,
        body,
      });
    },
    "/fiscal/invoiceReferenceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceReferenceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/invoiceReference`,
        qs,
        
      });
    },
    "/fiscal/invoiceReferenceUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceReferenceUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/invoiceReference`,
        qs,
        body,
      });
    },
    "/fiscal/invoiceReferenceDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceReferenceDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/invoiceReference/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceReferenceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceReferenceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/invoiceReference/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceSeriesCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/invoiceSeries`,
        qs,
        body,
      });
    },
    "/fiscal/invoiceSeriesRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/invoiceSeries`,
        qs,
        
      });
    },
    "/fiscal/invoiceSeriesUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/invoiceSeries`,
        qs,
        body,
      });
    },
    "/fiscal/invoiceSeriesDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/invoiceSeries/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceSeriesReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/invoiceSeries/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceSeriesOpGetNextNumber": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesOpGetNextNumber';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/invoiceSeriesOpGetNextNumber/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/invoiceSeriesOpUpdateLastNumber": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_invoiceSeriesOpUpdateLastNumber';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/invoiceSeriesOpUpdateLastNumber/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoice`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/outgoingInvoice`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/outgoingInvoice`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/outgoingInvoice/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/outgoingInvoice/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceItem`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/outgoingInvoiceItem`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/outgoingInvoiceItem`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/outgoingInvoiceItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/outgoingInvoiceItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpCancel/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpCreate`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceOpDiscount": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpDiscount';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpDiscount/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceOpOutgoingListBind": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpOutgoingListBind';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpOutgoingListBind/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpReturn": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpReturn';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpReturn/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoiceOpTaxationCalc": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpTaxationCalc';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpTaxationCalc/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoiceOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoiceOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoiceOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoicePaymentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoicePaymentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/outgoingInvoicePayment`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoicePaymentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoicePaymentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/outgoingInvoicePayment`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoicePaymentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoicePaymentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/outgoingInvoicePayment`,
        qs,
        body,
      });
    },
    "/fiscal/outgoingInvoicePaymentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoicePaymentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/outgoingInvoicePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/outgoingInvoicePaymentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_outgoingInvoicePaymentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/outgoingInvoicePayment/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "fiscal/taxation": {

    "/fiscal/taxation/taxCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/taxation/tax`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/tax`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/taxation/tax`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/taxation/tax/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/tax/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxOpReadByCode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxOpReadByCode';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/taxation/taxOpReadByCode`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/taxation/taxation`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/taxation`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/taxation/taxation`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/taxation/taxation/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/taxation/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationOperationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationOperationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/taxation/taxationOperation`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxationOperationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationOperationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/taxationOperation`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationOperationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationOperationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/taxation/taxationOperation`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxationOperationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationOperationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/taxation/taxationOperation/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationOperationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationOperationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/taxationOperation/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationOperationOpReadByCode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationOperationOpReadByCode';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/taxation/taxationOperationOpReadByCode`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationRuleCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationRuleCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/fiscal/taxation/taxationRule`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxationRuleRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationRuleRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/taxationRule`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationRuleUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationRuleUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/fiscal/taxation/taxationRule`,
        qs,
        body,
      });
    },
    "/fiscal/taxation/taxationRuleDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationRuleDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/fiscal/taxation/taxationRule/${pathParams.id}`,
        qs,
        
      });
    },
    "/fiscal/taxation/taxationRuleReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'fiscal_taxation_taxationRuleReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/fiscal/taxation/taxationRule/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "logistic": {

    "/logistic/shippingCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/logistic/shipping`,
        qs,
        body,
      });
    },
    "/logistic/shippingRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/logistic/shipping`,
        qs,
        
      });
    },
    "/logistic/shippingUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/logistic/shipping`,
        qs,
        body,
      });
    },
    "/logistic/shippingDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/logistic/shipping/${pathParams.id}`,
        qs,
        
      });
    },
    "/logistic/shippingReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/logistic/shipping/${pathParams.id}`,
        qs,
        
      });
    },
    "/logistic/shippingItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/logistic/shippingItem`,
        qs,
        body,
      });
    },
    "/logistic/shippingItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/logistic/shippingItem`,
        qs,
        
      });
    },
    "/logistic/shippingItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/logistic/shippingItem`,
        qs,
        body,
      });
    },
    "/logistic/shippingItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/logistic/shippingItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/logistic/shippingItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/logistic/shippingItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/logistic/shippingOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'logistic_shippingOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/logistic/shippingOpApprove/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "material": {

    "/material/addressCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/address`,
        qs,
        body,
      });
    },
    "/material/addressRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/address`,
        qs,
        
      });
    },
    "/material/addressUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/address`,
        qs,
        body,
      });
    },
    "/material/addressDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/address/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/addressReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/address/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/addressProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/addressProfile`,
        qs,
        body,
      });
    },
    "/material/addressProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/addressProfile`,
        qs,
        
      });
    },
    "/material/addressProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/addressProfile`,
        qs,
        body,
      });
    },
    "/material/addressProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/addressProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/addressProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_addressProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/addressProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/handlingUnitCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_handlingUnitCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/handlingUnit`,
        qs,
        body,
      });
    },
    "/material/handlingUnitRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_handlingUnitRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/handlingUnit`,
        qs,
        
      });
    },
    "/material/handlingUnitUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_handlingUnitUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/handlingUnit`,
        qs,
        body,
      });
    },
    "/material/handlingUnitDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_handlingUnitDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/handlingUnit/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/handlingUnitReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_handlingUnitReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/handlingUnit/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/incomingListCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/incomingList`,
        qs,
        body,
      });
    },
    "/material/incomingListRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/incomingList`,
        qs,
        
      });
    },
    "/material/incomingListUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/incomingList`,
        qs,
        body,
      });
    },
    "/material/incomingListDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/incomingList/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/incomingListReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/incomingList/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/incomingListItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/incomingListItem`,
        qs,
        body,
      });
    },
    "/material/incomingListItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/incomingListItem`,
        qs,
        
      });
    },
    "/material/incomingListItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/incomingListItem`,
        qs,
        body,
      });
    },
    "/material/incomingListItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/incomingListItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/incomingListItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/incomingListItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/incomingListOpImportFromOutgoingList": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListOpImportFromOutgoingList';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/incomingListOpImportFromOutgoingList/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/incomingListOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/incomingListOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/incomingListOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_incomingListOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/incomingListOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventory`,
        qs,
        body,
      });
    },
    "/material/inventoryRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventory`,
        qs,
        
      });
    },
    "/material/inventoryUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/inventory`,
        qs,
        body,
      });
    },
    "/material/inventoryDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/inventory/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventory/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryAdjustmentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryAdjustmentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryAdjustment`,
        qs,
        body,
      });
    },
    "/material/inventoryAdjustmentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryAdjustmentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryAdjustment`,
        qs,
        
      });
    },
    "/material/inventoryAdjustmentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryAdjustmentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/inventoryAdjustment`,
        qs,
        body,
      });
    },
    "/material/inventoryAdjustmentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryAdjustmentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/inventoryAdjustment/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryAdjustmentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryAdjustmentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryAdjustment/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryAdjustmentOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryAdjustmentOpCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryAdjustmentOpCreate/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryCheckCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryCheckCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryCheck`,
        qs,
        body,
      });
    },
    "/material/inventoryCheckRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryCheckRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryCheck`,
        qs,
        
      });
    },
    "/material/inventoryCheckUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryCheckUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/inventoryCheck`,
        qs,
        body,
      });
    },
    "/material/inventoryCheckDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryCheckDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/inventoryCheck/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryCheckReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryCheckReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryCheck/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpProcess": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpProcess';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpProcess/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpProcessRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpProcessRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpProcessRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryOpStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryOpStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryOpStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryProfile`,
        qs,
        body,
      });
    },
    "/material/inventoryProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryProfile`,
        qs,
        
      });
    },
    "/material/inventoryProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/inventoryProfile`,
        qs,
        body,
      });
    },
    "/material/inventoryProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/inventoryProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryStockCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryStockCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryStock`,
        qs,
        body,
      });
    },
    "/material/inventoryStockRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryStockRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryStock`,
        qs,
        
      });
    },
    "/material/inventoryStockUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryStockUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/inventoryStock`,
        qs,
        body,
      });
    },
    "/material/inventoryStockDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryStockDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/inventoryStock/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryStockReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryStockReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/inventoryStock/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/inventoryStockOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_inventoryStockOpCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/inventoryStockOpCreate/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/lotCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_lotCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/lot`,
        qs,
        body,
      });
    },
    "/material/lotRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_lotRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/lot`,
        qs,
        
      });
    },
    "/material/lotUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_lotUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/lot`,
        qs,
        body,
      });
    },
    "/material/lotDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_lotDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/lot/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/lotReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_lotReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/lot/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrder`,
        qs,
        body,
      });
    },
    "/material/movingOrderRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/movingOrder`,
        qs,
        
      });
    },
    "/material/movingOrderUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/movingOrder`,
        qs,
        body,
      });
    },
    "/material/movingOrderDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/movingOrder/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/movingOrder/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/movingOrderItem`,
        qs,
        
      });
    },
    "/material/movingOrderItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/movingOrderItem`,
        qs,
        body,
      });
    },
    "/material/movingOrderItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/movingOrderItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/movingOrderItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderItemOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderItemOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderItemOpLoad": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemOpLoad';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderItemOpLoad/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/movingOrderItemOpStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemOpStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderItemOpStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderItemOpStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderItemOpStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderItemOpStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpAllocateStock": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpAllocateStock';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpAllocateStock/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/movingOrderOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/movingOrderOpUnload": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_movingOrderOpUnload';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/movingOrderOpUnload/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/outgoingListRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/outgoingList`,
        qs,
        
      });
    },
    "/material/outgoingListDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/outgoingList/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/outgoingListReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/outgoingList/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/outgoingListOpCreateFromReservation": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpCreateFromReservation';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpCreateFromReservation/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/outgoingListOpMerge": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpMerge';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpMerge`,
        qs,
        body,
      });
    },
    "/material/outgoingListOpOutgoingInvoiceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpOutgoingInvoiceCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpOutgoingInvoiceCreate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/outgoingListOpOutgoingInvoiceCreateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpOutgoingInvoiceCreateRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpOutgoingInvoiceCreateRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/outgoingListOpPacked": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpPacked';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpPacked/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/outgoingListOpPackedRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpPackedRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpPackedRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/outgoingListOpVolumeCreateAuto": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_outgoingListOpVolumeCreateAuto';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/outgoingListOpVolumeCreateAuto/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/pickingOrderCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrder`,
        qs,
        body,
      });
    },
    "/material/pickingOrderRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/pickingOrder`,
        qs,
        
      });
    },
    "/material/pickingOrderUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/pickingOrder`,
        qs,
        body,
      });
    },
    "/material/pickingOrderDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/pickingOrder/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/pickingOrder/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderItem`,
        qs,
        body,
      });
    },
    "/material/pickingOrderItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/pickingOrderItem`,
        qs,
        
      });
    },
    "/material/pickingOrderItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/pickingOrderItem`,
        qs,
        body,
      });
    },
    "/material/pickingOrderItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/pickingOrderItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/pickingOrderItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpCreate`,
        qs,
        body,
      });
    },
    "/material/pickingOrderOpDistribute": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpDistribute';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpDistribute/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpDistributeAuto": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpDistributeAuto';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpDistributeAuto/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpDistributeRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpDistributeRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpDistributeRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpGroup": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpGroup';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpGroup`,
        qs,
        body,
      });
    },
    "/material/pickingOrderOpGroupRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpGroupRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpGroupRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpReservationFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpReservationFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpReservationFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpReservationFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpReservationFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpReservationFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpUngroup": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpUngroup';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpUngroup/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpUngroupDivergent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpUngroupDivergent';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpUngroupDivergent/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingOrderOpUngroupRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingOrderOpUngroupRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingOrderOpUngroupRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/pickingProfile`,
        qs,
        body,
      });
    },
    "/material/pickingProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/pickingProfile`,
        qs,
        
      });
    },
    "/material/pickingProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/pickingProfile`,
        qs,
        body,
      });
    },
    "/material/pickingProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/pickingProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/pickingProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_pickingProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/pickingProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/qualityCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_qualityCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/quality`,
        qs,
        body,
      });
    },
    "/material/qualityRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_qualityRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/quality`,
        qs,
        
      });
    },
    "/material/qualityUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_qualityUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/quality`,
        qs,
        body,
      });
    },
    "/material/qualityDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_qualityDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/quality/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/qualityReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_qualityReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/quality/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservation`,
        qs,
        body,
      });
    },
    "/material/reservationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/reservation`,
        qs,
        
      });
    },
    "/material/reservationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/reservation`,
        qs,
        body,
      });
    },
    "/material/reservationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/reservation/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/reservation/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/reservationItem`,
        qs,
        
      });
    },
    "/material/reservationItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/reservationItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpAllocate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpAllocate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpAllocate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/reservationOpAllocateAuto": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpAllocateAuto';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpAllocateAuto/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpAllocateAutoRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpAllocateAutoRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpAllocateAutoRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpAllocateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpAllocateRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpAllocateRevert/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/reservationOpAllocateStock": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpAllocateStock';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpAllocateStock/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpAllocateStockRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpAllocateStockRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpAllocateStockRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpCreate`,
        qs,
        body,
      });
    },
    "/material/reservationOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpFinishDivergent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpFinishDivergent';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpFinishDivergent/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationOpStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationOpStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationOpStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationTargetCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationTargetCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/reservationTarget`,
        qs,
        body,
      });
    },
    "/material/reservationTargetRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationTargetRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/reservationTarget`,
        qs,
        
      });
    },
    "/material/reservationTargetUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationTargetUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/reservationTarget`,
        qs,
        body,
      });
    },
    "/material/reservationTargetDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationTargetDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/reservationTarget/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/reservationTargetReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_reservationTargetReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/reservationTarget/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/serialCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_serialCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/serial`,
        qs,
        body,
      });
    },
    "/material/serialRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_serialRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/serial`,
        qs,
        
      });
    },
    "/material/serialUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_serialUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/serial`,
        qs,
        body,
      });
    },
    "/material/serialDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_serialDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/serial/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/serialReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_serialReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/serial/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stock`,
        qs,
        
      });
    },
    "/material/stockReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stock/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockAvailabilityRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockAvailabilityRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockAvailability`,
        qs,
        
      });
    },
    "/material/stockClusterCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockClusterCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockCluster`,
        qs,
        body,
      });
    },
    "/material/stockClusterRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockClusterRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockCluster`,
        qs,
        
      });
    },
    "/material/stockClusterUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockClusterUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/stockCluster`,
        qs,
        body,
      });
    },
    "/material/stockClusterDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockClusterDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/stockCluster/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockClusterReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockClusterReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockCluster/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockManagementCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockManagement`,
        qs,
        body,
      });
    },
    "/material/stockManagementRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockManagement`,
        qs,
        
      });
    },
    "/material/stockManagementUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/stockManagement`,
        qs,
        body,
      });
    },
    "/material/stockManagementDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/stockManagement/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockManagementReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockManagement/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockManagementItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockManagementItem`,
        qs,
        body,
      });
    },
    "/material/stockManagementItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockManagementItem`,
        qs,
        
      });
    },
    "/material/stockManagementItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/stockManagementItem`,
        qs,
        body,
      });
    },
    "/material/stockManagementItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/stockManagementItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockManagementItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockManagementItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockManagementOpImport": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementOpImport';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockManagementOpImport`,
        qs,
        body,
      });
    },
    "/material/stockManagementOpUpdateAverageDailyConsumption": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockManagementOpUpdateAverageDailyConsumption';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockManagementOpUpdateAverageDailyConsumption`,
        qs,
        body,
      });
    },
    "/material/stockOpBarcode": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockOpBarcode';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockOpBarcode`,
        qs,
        body,
      });
    },
    "/material/stockOpCompensate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockOpCompensate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockOpCompensate`,
        qs,
        body,
      });
    },
    "/material/stockOpUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockOpUpdate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockOpUpdate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/stockTransactionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockTransactionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockTransaction`,
        qs,
        
      });
    },
    "/material/stockTransactionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockTransactionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/stockTransaction/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/stockTransactionOpRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_stockTransactionOpRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/stockTransactionOpRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/volumeCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/volume`,
        qs,
        body,
      });
    },
    "/material/volumeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/volume`,
        qs,
        
      });
    },
    "/material/volumeUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/volume`,
        qs,
        body,
      });
    },
    "/material/volumeDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/volume/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/volumeReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/volume/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/volumeItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/volumeItem`,
        qs,
        body,
      });
    },
    "/material/volumeItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/volumeItem`,
        qs,
        
      });
    },
    "/material/volumeItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/volumeItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/volumeItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/volumeItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/volumeOpCheck": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeOpCheck';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/volumeOpCheck/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/material/volumeOpCheckRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeOpCheckRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/volumeOpCheckRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/volumeOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/volumeOpCreate`,
        qs,
        body,
      });
    },
    "/material/volumeOpHandlingUnitSet": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_volumeOpHandlingUnitSet';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/volumeOpHandlingUnitSet/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/warehouseCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_warehouseCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/material/warehouse`,
        qs,
        body,
      });
    },
    "/material/warehouseRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_warehouseRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/warehouse`,
        qs,
        
      });
    },
    "/material/warehouseUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_warehouseUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/material/warehouse`,
        qs,
        body,
      });
    },
    "/material/warehouseDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_warehouseDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/material/warehouse/${pathParams.id}`,
        qs,
        
      });
    },
    "/material/warehouseReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'material_warehouseReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/material/warehouse/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "sale": {

    "/sale/priceFormationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceFormation`,
        qs,
        body,
      });
    },
    "/sale/priceFormationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceFormation`,
        qs,
        
      });
    },
    "/sale/priceFormationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/priceFormation`,
        qs,
        body,
      });
    },
    "/sale/priceFormationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/priceFormation/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceFormationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceFormation/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceFormationItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceFormationItem`,
        qs,
        body,
      });
    },
    "/sale/priceFormationItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceFormationItem`,
        qs,
        
      });
    },
    "/sale/priceFormationItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/priceFormationItem`,
        qs,
        body,
      });
    },
    "/sale/priceFormationItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/priceFormationItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceFormationItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceFormationItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceFormationOpCalculate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationOpCalculate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceFormationOpCalculate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/sale/priceFormationOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceFormationOpClone/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceFormationOpSimulation": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceFormationOpSimulation';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceFormationOpSimulation/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/sale/priceListCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceList`,
        qs,
        body,
      });
    },
    "/sale/priceListRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceList`,
        qs,
        
      });
    },
    "/sale/priceListUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/priceList`,
        qs,
        body,
      });
    },
    "/sale/priceListDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/priceList/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceListReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceList/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceListItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/priceListItem`,
        qs,
        body,
      });
    },
    "/sale/priceListItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceListItem`,
        qs,
        
      });
    },
    "/sale/priceListItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/priceListItem`,
        qs,
        body,
      });
    },
    "/sale/priceListItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/priceListItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/priceListItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_priceListItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/priceListItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quote`,
        qs,
        body,
      });
    },
    "/sale/quoteRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/quote`,
        qs,
        
      });
    },
    "/sale/quoteUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/quote`,
        qs,
        body,
      });
    },
    "/sale/quoteDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/quote/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/quote/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItem`,
        qs,
        body,
      });
    },
    "/sale/quoteItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/quoteItem`,
        qs,
        
      });
    },
    "/sale/quoteItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/quoteItem`,
        qs,
        body,
      });
    },
    "/sale/quoteItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/quoteItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/quoteItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemOpReject": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemOpReject';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemOpReject/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemOpRejectRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemOpRejectRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemOpRejectRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemProposal`,
        qs,
        body,
      });
    },
    "/sale/quoteItemProposalRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/quoteItemProposal`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/quoteItemProposal`,
        qs,
        body,
      });
    },
    "/sale/quoteItemProposalDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/quoteItemProposal/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/quoteItemProposal/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemProposalOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemProposalOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalOpReject": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalOpReject';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemProposalOpReject/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteItemProposalOpRejectRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteItemProposalOpRejectRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteItemProposalOpRejectRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpCancel/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpCancelRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpCancelRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpCancelRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpCreate`,
        qs,
        body,
      });
    },
    "/sale/quoteOpFill": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpFill';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpFill/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpFillRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpFillRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpFillRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpReject": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpReject';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpReject/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpRejectRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpRejectRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpRejectRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpSubmit": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpSubmit';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpSubmit/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/quoteOpSubmitRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_quoteOpSubmitRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/quoteOpSubmitRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/sale`,
        qs,
        body,
      });
    },
    "/sale/saleRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/sale`,
        qs,
        
      });
    },
    "/sale/saleUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/sale`,
        qs,
        body,
      });
    },
    "/sale/saleDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/sale/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/sale/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleItem`,
        qs,
        body,
      });
    },
    "/sale/saleItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/saleItem`,
        qs,
        
      });
    },
    "/sale/saleItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/saleItem`,
        qs,
        body,
      });
    },
    "/sale/saleItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/saleItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/saleItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleItemOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleItemOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleItemOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/sale/saleOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpApproveUnconditionally": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpApproveUnconditionally';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpApproveUnconditionally/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpCancel/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/sale/saleOpCancelRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpCancelRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpCancelRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpClone/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpCreate`,
        qs,
        body,
      });
    },
    "/sale/saleOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpForwardAuto": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpForwardAuto';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpForwardAuto/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/sale/saleOpMerge": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpMerge';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpMerge`,
        qs,
        body,
      });
    },
    "/sale/saleOpMergeRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpMergeRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpMergeRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpPickingOrderCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpPickingOrderCreate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpPickingOrderCreate/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/sale/saleOpPickingOrderCreateRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpPickingOrderCreateRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpPickingOrderCreateRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpShipmentAssign": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpShipmentAssign';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpShipmentAssign/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpShipmentAssignRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpShipmentAssignRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpShipmentAssignRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpSplit": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpSplit';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpSplit/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/sale/saleOpTaxationCalc": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpTaxationCalc';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpTaxationCalc/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/sale/salePaymentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_salePaymentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/salePayment`,
        qs,
        body,
      });
    },
    "/sale/salePaymentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_salePaymentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/salePayment`,
        qs,
        
      });
    },
    "/sale/salePaymentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_salePaymentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/salePayment`,
        qs,
        body,
      });
    },
    "/sale/salePaymentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_salePaymentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/salePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/salePaymentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_salePaymentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/salePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/sale/saleProfile`,
        qs,
        body,
      });
    },
    "/sale/saleProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/saleProfile`,
        qs,
        
      });
    },
    "/sale/saleProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/sale/saleProfile`,
        qs,
        body,
      });
    },
    "/sale/saleProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/sale/saleProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/sale/saleProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'sale_saleProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/sale/saleProfile/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "shipping": {

    "/shipping/shipmentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipment`,
        qs,
        body,
      });
    },
    "/shipping/shipmentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/shipping/shipment`,
        qs,
        
      });
    },
    "/shipping/shipmentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/shipping/shipment`,
        qs,
        body,
      });
    },
    "/shipping/shipmentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/shipping/shipment/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/shipping/shipment/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpCheckFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpCheckFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpCheckFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpCheckFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpCheckFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpCheckFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpCheckIgnore": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpCheckIgnore';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpCheckIgnore/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpCheckStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpCheckStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpCheckStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpCheckStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpCheckStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpCheckStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpLoadIgnore": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpLoadIgnore';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpLoadIgnore/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpLoadStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpLoadStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpLoadStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpLoadStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpLoadStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpLoadStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpLoadVolume": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpLoadVolume';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpLoadVolume/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpOutgoingInvoiceBind": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpOutgoingInvoiceBind';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpOutgoingInvoiceBind/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpOutgoingInvoiceBindRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpOutgoingInvoiceBindRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpOutgoingInvoiceBindRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/shipping/shipmentOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'shipping_shipmentOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/shipping/shipmentOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "supply/production": {

    "/supply/production/bomCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/bom`,
        qs,
        body,
      });
    },
    "/supply/production/bomRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/bom`,
        qs,
        
      });
    },
    "/supply/production/bomUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/bom`,
        qs,
        body,
      });
    },
    "/supply/production/bomDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/bom/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/bomReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/bom/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/bomItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/bomItem`,
        qs,
        body,
      });
    },
    "/supply/production/bomItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/bomItem`,
        qs,
        
      });
    },
    "/supply/production/bomItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/bomItem`,
        qs,
        body,
      });
    },
    "/supply/production/bomItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/bomItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/bomItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/bomItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/bomOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_bomOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/bomOpClone/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/operationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/operation`,
        qs,
        body,
      });
    },
    "/supply/production/operationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/operation`,
        qs,
        
      });
    },
    "/supply/production/operationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/operation`,
        qs,
        body,
      });
    },
    "/supply/production/operationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/operation/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/operationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/operation/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/operationTypeCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/operationType`,
        qs,
        body,
      });
    },
    "/supply/production/operationTypeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/operationType`,
        qs,
        
      });
    },
    "/supply/production/operationTypeUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/operationType`,
        qs,
        body,
      });
    },
    "/supply/production/operationTypeDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/operationType/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/operationTypeReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/operationType/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/operationTypeAccountCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeAccountCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/operationTypeAccount`,
        qs,
        body,
      });
    },
    "/supply/production/operationTypeAccountRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeAccountRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/operationTypeAccount`,
        qs,
        
      });
    },
    "/supply/production/operationTypeAccountUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeAccountUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/operationTypeAccount`,
        qs,
        body,
      });
    },
    "/supply/production/operationTypeAccountDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeAccountDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/operationTypeAccount/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/operationTypeAccountReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_operationTypeAccountReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/operationTypeAccount/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionBatchCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionBatch`,
        qs,
        body,
      });
    },
    "/supply/production/productionBatchRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionBatch`,
        qs,
        
      });
    },
    "/supply/production/productionBatchUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/productionBatch`,
        qs,
        body,
      });
    },
    "/supply/production/productionBatchDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/productionBatch/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionBatchReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionBatch/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionBatchOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionBatchOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionBatchOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionBatchOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionBatchOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionBatchOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionBatchOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionBatchOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionBatchOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrder`,
        qs,
        body,
      });
    },
    "/supply/production/productionOrderRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionOrder`,
        qs,
        
      });
    },
    "/supply/production/productionOrderUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/productionOrder`,
        qs,
        body,
      });
    },
    "/supply/production/productionOrderDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/productionOrder/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionOrder/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpCreate`,
        qs,
        body,
      });
    },
    "/supply/production/productionOrderOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionOrderOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionOrderOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionOrderOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionProfile`,
        qs,
        body,
      });
    },
    "/supply/production/productionProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionProfile`,
        qs,
        
      });
    },
    "/supply/production/productionProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/productionProfile`,
        qs,
        body,
      });
    },
    "/supply/production/productionProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/productionProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStep`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionStep`,
        qs,
        
      });
    },
    "/supply/production/productionStepUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/productionStep`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/productionStep/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionStep/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepConsumptionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepConsumptionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepConsumption`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepConsumptionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepConsumptionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionStepConsumption`,
        qs,
        
      });
    },
    "/supply/production/productionStepConsumptionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepConsumptionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/productionStepConsumption`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepConsumptionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepConsumptionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/productionStepConsumption/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepConsumptionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepConsumptionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionStepConsumption/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepConsumptionOpCalculate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepConsumptionOpCalculate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepConsumptionOpCalculate/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepOpCreate`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepOpStart": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepOpStart';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepOpStart/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepOpStartRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepOpStartRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepOpStartRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepProductionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepProductionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/production/productionStepProduction`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepProductionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepProductionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionStepProduction`,
        qs,
        
      });
    },
    "/supply/production/productionStepProductionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepProductionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/production/productionStepProduction`,
        qs,
        body,
      });
    },
    "/supply/production/productionStepProductionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepProductionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/production/productionStepProduction/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/production/productionStepProductionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_production_productionStepProductionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/production/productionStepProduction/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "supply/purchase": {

    "/supply/purchase/priceListCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/priceList`,
        qs,
        body,
      });
    },
    "/supply/purchase/priceListRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/priceList`,
        qs,
        
      });
    },
    "/supply/purchase/priceListUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/priceList`,
        qs,
        body,
      });
    },
    "/supply/purchase/priceListDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/priceList/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/priceListReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/priceList/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/priceListItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/priceListItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/priceListItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/priceListItem`,
        qs,
        
      });
    },
    "/supply/purchase/priceListItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/priceListItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/priceListItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/priceListItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/priceListItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_priceListItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/priceListItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposal`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/proposal`,
        qs,
        
      });
    },
    "/supply/purchase/proposalUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/proposal`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/proposal/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/proposal/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/proposalItem`,
        qs,
        
      });
    },
    "/supply/purchase/proposalItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/proposalItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/proposalItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/proposalItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalItemOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalItemOpApprove/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalItemOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalItemOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalItemOpDisapprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemOpDisapprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalItemOpDisapprove/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalItemOpDisapproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalItemOpDisapproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalItemOpDisapproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalOpCancel/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalOpCancelRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalOpCancelRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalOpCancelRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/proposalOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/proposalRequestUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalRequestUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/proposalRequest`,
        qs,
        body,
      });
    },
    "/supply/purchase/proposalRequestReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_proposalRequestReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/proposalRequest/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchase`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchase`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/purchase`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/purchase/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchase/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchaseItem`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/purchaseItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/purchaseItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchaseItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpApproveUnconditionally": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpApproveUnconditionally';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpApproveUnconditionally/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpCancel/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseOpCancelRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpCancelRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpCancelRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpClone/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpCreate`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpFinish/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpMerge": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpMerge';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpMerge`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpSplit": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpSplit';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpSplit/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseOpTaxationCalc": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpTaxationCalc';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpTaxationCalc/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseOpUpdatePrepared": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseOpUpdatePrepared';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseOpUpdatePrepared`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchasePaymentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchasePaymentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchasePayment`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchasePaymentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchasePaymentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchasePayment`,
        qs,
        
      });
    },
    "/supply/purchase/purchasePaymentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchasePaymentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/purchasePayment`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchasePaymentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchasePaymentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/purchasePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchasePaymentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchasePaymentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchasePayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/purchaseProfile`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchaseProfile`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/purchaseProfile`,
        qs,
        body,
      });
    },
    "/supply/purchase/purchaseProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/purchaseProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/purchaseProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_purchaseProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/purchaseProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quote`,
        qs,
        body,
      });
    },
    "/supply/purchase/quoteRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/quote`,
        qs,
        
      });
    },
    "/supply/purchase/quoteUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/quote`,
        qs,
        body,
      });
    },
    "/supply/purchase/quoteDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/quote/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/quote/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/quoteItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/quoteItem`,
        qs,
        
      });
    },
    "/supply/purchase/quoteItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/supply/purchase/quoteItem`,
        qs,
        body,
      });
    },
    "/supply/purchase/quoteItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/supply/purchase/quoteItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/supply/purchase/quoteItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpCancel": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpCancel';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpCancel/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpCancelRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpCancelRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpCancelRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpCreate`,
        qs,
        body,
      });
    },
    "/supply/purchase/quoteOpFinish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpFinish';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpFinish/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/supply/purchase/quoteOpFinishRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpFinishRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpFinishRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/supply/purchase/quoteOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'supply_purchase_quoteOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/supply/purchase/quoteOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/audit": {

    "/system/audit/logCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_logCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/audit/log`,
        qs,
        body,
      });
    },
    "/system/audit/logRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_logRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/audit/log`,
        qs,
        
      });
    },
    "/system/audit/logReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_logReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/audit/log/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/audit/logOpDeleteExpired": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_logOpDeleteExpired';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/audit/logOpDeleteExpired`,
        qs,
        
      });
    },
    "/system/audit/sourceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_sourceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/audit/source`,
        qs,
        
      });
    },
    "/system/audit/sourceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_sourceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/audit/source/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/audit/sourceOpReadByEntity": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_sourceOpReadByEntity';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/audit/sourceOpReadByEntity`,
        qs,
        
      });
    },
    "/system/audit/userLogCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_userLogCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/audit/userLog`,
        qs,
        body,
      });
    },
    "/system/audit/userLogRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_userLogRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/audit/userLog`,
        qs,
        
      });
    },
    "/system/audit/userLogUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_userLogUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/audit/userLog`,
        qs,
        body,
      });
    },
    "/system/audit/userLogDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_userLogDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/audit/userLog/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/audit/userLogReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_audit_userLogReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/audit/userLog/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/automation": {

    "/system/automation/agentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_agentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/automation/agent`,
        qs,
        body,
      });
    },
    "/system/automation/agentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_agentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/automation/agent`,
        qs,
        
      });
    },
    "/system/automation/agentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_agentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/automation/agent`,
        qs,
        body,
      });
    },
    "/system/automation/agentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_agentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/automation/agent/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/automation/agentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_agentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/automation/agent/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/automation/agentOpExecute": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_agentOpExecute';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/automation/agentOpExecute/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/system/automation/scheduleCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_scheduleCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/automation/schedule`,
        qs,
        body,
      });
    },
    "/system/automation/scheduleRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_scheduleRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/automation/schedule`,
        qs,
        
      });
    },
    "/system/automation/scheduleUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_scheduleUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/automation/schedule`,
        qs,
        body,
      });
    },
    "/system/automation/scheduleDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_scheduleDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/automation/schedule/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/automation/scheduleReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_scheduleReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/automation/schedule/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/automation/scheduleOpExecute": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_scheduleOpExecute';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/automation/scheduleOpExecute/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/automation/watcherCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_watcherCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/automation/watcher`,
        qs,
        body,
      });
    },
    "/system/automation/watcherRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_watcherRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/automation/watcher`,
        qs,
        
      });
    },
    "/system/automation/watcherUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_watcherUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/automation/watcher`,
        qs,
        body,
      });
    },
    "/system/automation/watcherDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_watcherDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/automation/watcher/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/automation/watcherReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_automation_watcherReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/automation/watcher/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system": {

    "/system/checkAuth": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_checkAuth';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/checkAuth`,
        qs,
        
      });
    },
    "/system/customPropertiesOpSet": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_customPropertiesOpSet';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/customPropertiesOpSet`,
        qs,
        body,
      });
    },
    "/system/customTagsOpSet": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_customTagsOpSet';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/customTagsOpSet`,
        qs,
        
      });
    },
    "/system/databaseOpOptimize": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_databaseOpOptimize';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/databaseOpOptimize`,
        qs,
        
      });
    },
    "/system/infoRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_infoRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/info`,
        qs,
        
      });
    },
    "/system/lockOpAcquire": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_lockOpAcquire';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/lockOpAcquire/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/lockOpExtend": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_lockOpExtend';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/lockOpExtend/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/lockOpRelease": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_lockOpRelease';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/lockOpRelease/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/resourcesRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_resourcesRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/resources`,
        qs,
        
      });
    },
    "/system/statusCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_statusCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/status`,
        qs,
        body,
      });
    },
    "/system/statusRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_statusRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/status`,
        qs,
        
      });
    },
    "/system/statusUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_statusUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/status`,
        qs,
        body,
      });
    },
    "/system/statusDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_statusDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/status/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/statusReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_statusReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/status/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/testCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_testCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/test`,
        qs,
        body,
      });
    },
    "/system/testRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_testRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/test`,
        qs,
        
      });
    }
  },
  "system/data": {

    "/system/data/dataSourceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/data/dataSource`,
        qs,
        body,
      });
    },
    "/system/data/dataSourceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/data/dataSource`,
        qs,
        
      });
    },
    "/system/data/dataSourceUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/data/dataSource`,
        qs,
        body,
      });
    },
    "/system/data/dataSourceDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/data/dataSource/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/data/dataSourceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/data/dataSource/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/data/dataSourceFieldRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceFieldRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/data/dataSourceField`,
        qs,
        
      });
    },
    "/system/data/dataSourceFieldUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceFieldUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/data/dataSourceField`,
        qs,
        body,
      });
    },
    "/system/data/dataSourceFieldReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceFieldReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/data/dataSourceField/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/data/dataSourceOpRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceOpRead';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/data/dataSourceOpRead`,
        qs,
        body,
      });
    },
    "/system/data/dataSourceParameterCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceParameterCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/data/dataSourceParameter`,
        qs,
        body,
      });
    },
    "/system/data/dataSourceParameterRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceParameterRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/data/dataSourceParameter`,
        qs,
        
      });
    },
    "/system/data/dataSourceParameterUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceParameterUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/data/dataSourceParameter`,
        qs,
        body,
      });
    },
    "/system/data/dataSourceParameterDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceParameterDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/data/dataSourceParameter/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/data/dataSourceParameterReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_data_dataSourceParameterReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/data/dataSourceParameter/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/file": {

    "/system/file/fileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_file_fileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/file/file`,
        qs,
        body,
      });
    },
    "/system/file/fileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_file_fileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/file/file`,
        qs,
        
      });
    },
    "/system/file/fileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_file_fileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/file/file`,
        qs,
        body,
      });
    },
    "/system/file/fileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_file_fileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/file/file/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/file/fileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_file_fileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/file/file/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/file/fileOpReadContent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_file_fileOpReadContent';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/file/fileOpReadContent/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/frontend": {

    "/system/frontend/injectsRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_frontend_injectsRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/frontend/injects`,
        qs,
        
      });
    },
    "/system/frontend/injectsUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_frontend_injectsUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/frontend/injects`,
        qs,
        body,
      });
    },
    "/system/frontend/menuRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_frontend_menuRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/frontend/menu`,
        qs,
        
      });
    },
    "/system/frontend/menuUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_frontend_menuUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/frontend/menu`,
        qs,
        body,
      });
    },
    "/system/frontend/resourcesRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_frontend_resourcesRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/frontend/resources`,
        qs,
        
      });
    },
    "/system/frontend/resourcesUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_frontend_resourcesUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/frontend/resources`,
        qs,
        body,
      });
    }
  },
  "system/image": {

    "/system/image/imageCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_image_imageCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/image/image`,
        qs,
        body,
      });
    },
    "/system/image/imageRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_image_imageRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/image/image`,
        qs,
        
      });
    },
    "/system/image/imageUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_image_imageUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/image/image`,
        qs,
        body,
      });
    },
    "/system/image/imageDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_image_imageDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/image/image/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/image/imageReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_image_imageReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/image/image/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/info": {

    "/system/info/healthRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_info_healthRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/info/health`,
        qs,
        
      });
    },
    "/system/info/metricsRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_info_metricsRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/info/metrics`,
        qs,
        
      });
    }
  },
  "system/integration": {

    "/system/integration/messageRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_messageRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/message`,
        qs,
        
      });
    },
    "/system/integration/messageDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_messageDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/integration/message/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/messageReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_messageReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/message/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/messageOpPost": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_messageOpPost';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/messageOpPost`,
        qs,
        body,
      });
    },
    "/system/integration/messageOpTransfer": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_messageOpTransfer';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/messageOpTransfer/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/queueCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/queue`,
        qs,
        body,
      });
    },
    "/system/integration/queueRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/queue`,
        qs,
        
      });
    },
    "/system/integration/queueUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/integration/queue`,
        qs,
        body,
      });
    },
    "/system/integration/queueDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/integration/queue/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/queueReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/queue/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/queueOpDeleteExpiredMessages": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueOpDeleteExpiredMessages';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/queueOpDeleteExpiredMessages`,
        qs,
        
      });
    },
    "/system/integration/queueOpReadMessage": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueOpReadMessage';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/queueOpReadMessage`,
        qs,
        body,
      });
    },
    "/system/integration/queueOpReadMessageTimeout": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_queueOpReadMessageTimeout';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/queueOpReadMessageTimeout`,
        qs,
        body,
      });
    },
    "/system/integration/subscriptionCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_subscriptionCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/subscription`,
        qs,
        body,
      });
    },
    "/system/integration/subscriptionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_subscriptionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/subscription`,
        qs,
        
      });
    },
    "/system/integration/subscriptionUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_subscriptionUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/integration/subscription`,
        qs,
        body,
      });
    },
    "/system/integration/subscriptionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_subscriptionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/integration/subscription/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/subscriptionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_subscriptionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/subscription/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/topicCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_topicCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/topic`,
        qs,
        body,
      });
    },
    "/system/integration/topicRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_topicRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/topic`,
        qs,
        
      });
    },
    "/system/integration/topicUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_topicUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/integration/topic`,
        qs,
        body,
      });
    },
    "/system/integration/topicDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_topicDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/integration/topic/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/topicReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_topicReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/integration/topic/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/integration/topicOpPublish": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_integration_topicOpPublish';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/integration/topicOpPublish`,
        qs,
        body,
      });
    }
  },
  "system/job": {

    "/system/job/jobRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_job_jobRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/job/job`,
        qs,
        
      });
    },
    "/system/job/jobDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_job_jobDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/job/job/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/job/jobReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_job_jobReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/job/job/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/mail": {

    "/system/mail/mailerConfigCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_mail_mailerConfigCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/mail/mailerConfig`,
        qs,
        body,
      });
    },
    "/system/mail/mailerConfigRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_mail_mailerConfigRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/mail/mailerConfig`,
        qs,
        
      });
    },
    "/system/mail/mailerConfigUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_mail_mailerConfigUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/mail/mailerConfig`,
        qs,
        body,
      });
    },
    "/system/mail/mailerConfigDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_mail_mailerConfigDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/mail/mailerConfig/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/mail/mailerConfigReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_mail_mailerConfigReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/mail/mailerConfig/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/mail/messageOpSend": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_mail_messageOpSend';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/mail/messageOpSend`,
        qs,
        body,
      });
    }
  },
  "system/printing": {

    "/system/printing/printerCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printer`,
        qs,
        body,
      });
    },
    "/system/printing/printerRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/printing/printer`,
        qs,
        
      });
    },
    "/system/printing/printerUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/printing/printer`,
        qs,
        body,
      });
    },
    "/system/printing/printerDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/printing/printer/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/printing/printer/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerJobCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerJob`,
        qs,
        body,
      });
    },
    "/system/printing/printerJobRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/printing/printerJob`,
        qs,
        
      });
    },
    "/system/printing/printerJobDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/printing/printerJob/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerJobReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/printing/printerJob/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerJobDataReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobDataReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/printing/printerJobData/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerJobOpFetch": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobOpFetch';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerJobOpFetch/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerJobOpPrinted": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobOpPrinted';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerJobOpPrinted/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerJobOpUnlock": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerJobOpUnlock';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerJobOpUnlock/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerOpPause": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerOpPause';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerOpPause/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerOpPauseRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerOpPauseRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerOpPauseRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerOpPrintTestPage": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerOpPrintTestPage';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerOpPrintTestPage/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/printing/printerOpPrinterJobFetch": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_printing_printerOpPrinterJobFetch';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/printing/printerOpPrinterJobFetch/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "system/report": {

    "/system/report/reportCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/report/report`,
        qs,
        body,
      });
    },
    "/system/report/reportRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/report/report`,
        qs,
        
      });
    },
    "/system/report/reportUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/report/report`,
        qs,
        body,
      });
    },
    "/system/report/reportDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/report/report/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/report/reportReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/report/report/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/report/reportOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/report/reportOpClone/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/report/reportOpGenerate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportOpGenerate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/report/reportOpGenerate`,
        qs,
        body,
      });
    },
    "/system/report/reportOpPrint": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportOpPrint';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/report/reportOpPrint`,
        qs,
        body,
      });
    },
    "/system/report/reportTemplateRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportTemplateRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/report/reportTemplate`,
        qs,
        
      });
    },
    "/system/report/reportTemplateReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportTemplateReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/report/reportTemplate/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/report/reportTemplateOpUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_report_reportTemplateOpUpdate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/report/reportTemplateOpUpdate/${pathParams.id}`,
        qs,
        body,
      });
    }
  },
  "system/security": {

    "/system/security/accessPointCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessPointCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/accessPoint`,
        qs,
        body,
      });
    },
    "/system/security/accessPointRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessPointRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/accessPoint`,
        qs,
        
      });
    },
    "/system/security/accessPointUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessPointUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/security/accessPoint`,
        qs,
        body,
      });
    },
    "/system/security/accessPointDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessPointDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/accessPoint/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/accessPointReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessPointReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/accessPoint/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/accessPointOpValidate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessPointOpValidate';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/accessPointOpValidate`,
        qs,
        
      });
    },
    "/system/security/accessProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/accessProfile`,
        qs,
        body,
      });
    },
    "/system/security/accessProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/accessProfile`,
        qs,
        
      });
    },
    "/system/security/accessProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/security/accessProfile`,
        qs,
        body,
      });
    },
    "/system/security/accessProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/accessProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/accessProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_accessProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/accessProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/grantCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_grantCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/grant`,
        qs,
        body,
      });
    },
    "/system/security/grantRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_grantRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/grant`,
        qs,
        
      });
    },
    "/system/security/grantDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_grantDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/grant/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/grantReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_grantReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/grant/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/groupCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_groupCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/group`,
        qs,
        body,
      });
    },
    "/system/security/groupRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_groupRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/group`,
        qs,
        
      });
    },
    "/system/security/groupUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_groupUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/security/group`,
        qs,
        body,
      });
    },
    "/system/security/groupDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_groupDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/group/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/groupReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_groupReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/group/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/groupOpClone": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_groupOpClone';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/groupOpClone/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/system/security/keyStoreCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_keyStoreCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/keyStore`,
        qs,
        body,
      });
    },
    "/system/security/keyStoreRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_keyStoreRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/keyStore`,
        qs,
        
      });
    },
    "/system/security/keyStoreUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_keyStoreUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/security/keyStore`,
        qs,
        body,
      });
    },
    "/system/security/keyStoreDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_keyStoreDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/keyStore/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/keyStoreReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_keyStoreReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/keyStore/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/keyStoreOpReadContent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_keyStoreOpReadContent';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/keyStoreOpReadContent/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/roleRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_roleRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/role`,
        qs,
        
      });
    },
    "/system/security/roleReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_roleReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/role/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/roleAccessPointCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_roleAccessPointCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/roleAccessPoint`,
        qs,
        body,
      });
    },
    "/system/security/roleAccessPointRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_roleAccessPointRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/roleAccessPoint`,
        qs,
        
      });
    },
    "/system/security/roleAccessPointDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_roleAccessPointDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/roleAccessPoint/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/roleAccessPointReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_roleAccessPointReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/roleAccessPoint/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/sessionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_sessionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/session`,
        qs,
        
      });
    },
    "/system/security/sessionDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_sessionDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/session/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/sessionReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_sessionReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/session/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/sessionContext": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_sessionContext';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/sessionContext`,
        qs,
        
      });
    },
    "/system/security/sessionOpGetCurrent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_sessionOpGetCurrent';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/sessionOpGetCurrent`,
        qs,
        
      });
    },
    "/system/security/tokenOpInvalidate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_tokenOpInvalidate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/tokenOpInvalidate`,
        qs,
        body,
      });
    },
    "/system/security/tokenOpInvalidateCurrent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_tokenOpInvalidateCurrent';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/tokenOpInvalidateCurrent`,
        qs,
        
      });
    },
    "/system/security/tokenOpRenew": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_tokenOpRenew';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/tokenOpRenew`,
        qs,
        
      });
    },
    "/system/security/tokenOpRequest": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_tokenOpRequest';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/tokenOpRequest`,
        qs,
        body,
      });
    },
    "/system/security/tokenOpRequestPermanent": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_tokenOpRequestPermanent';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/tokenOpRequestPermanent`,
        qs,
        body,
      });
    },
    "/system/security/userCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/user`,
        qs,
        body,
      });
    },
    "/system/security/userRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/user`,
        qs,
        
      });
    },
    "/system/security/userUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/security/user`,
        qs,
        body,
      });
    },
    "/system/security/userDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/security/user/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/user/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userOpActivate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpActivate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpActivate/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userOpAuthenticate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpAuthenticate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpAuthenticate`,
        qs,
        body,
      });
    },
    "/system/security/userOpChangeEmail": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpChangeEmail';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpChangeEmail`,
        qs,
        body,
      });
    },
    "/system/security/userOpChangeEmailConfirmation": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpChangeEmailConfirmation';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpChangeEmailConfirmation`,
        qs,
        body,
      });
    },
    "/system/security/userOpChangePassword": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpChangePassword';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpChangePassword`,
        qs,
        body,
      });
    },
    "/system/security/userOpChangePasswordThird": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpChangePasswordThird';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpChangePasswordThird/${pathParams.id}`,
        qs,
        body,
      });
    },
    "/system/security/userOpCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpCreate`,
        qs,
        body,
      });
    },
    "/system/security/userOpCreateConfirmation": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpCreateConfirmation';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpCreateConfirmation`,
        qs,
        body,
      });
    },
    "/system/security/userOpCreateResend": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpCreateResend';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpCreateResend`,
        qs,
        body,
      });
    },
    "/system/security/userOpGrantOptionAdd": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpGrantOptionAdd';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpGrantOptionAdd/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userOpGrantOptionRemove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpGrantOptionRemove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpGrantOptionRemove/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userOpInactivate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpInactivate';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpInactivate/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userOpResetPassword": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpResetPassword';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpResetPassword`,
        qs,
        body,
      });
    },
    "/system/security/userOpResetPasswordConfirmation": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpResetPasswordConfirmation';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpResetPasswordConfirmation`,
        qs,
        body,
      });
    },
    "/system/security/userOpUnlock": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpUnlock';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpUnlock/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/security/userOpUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userOpUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/security/userOpUpdate`,
        qs,
        body,
      });
    },
    "/system/security/userPermissionRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_security_userPermissionRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/security/userPermission`,
        qs,
        
      });
    }
  },
  "system/storage": {

    "/system/storage/get": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_get';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/storage/get`,
        qs,
        
      });
    },
    "/system/storage/getNumber": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_getNumber';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/storage/getNumber`,
        qs,
        
      });
    },
    "/system/storage/getString": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_getString';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/storage/getString`,
        qs,
        
      });
    },
    "/system/storage/put": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_put';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/storage/put`,
        qs,
        body,
      });
    },
    "/system/storage/putNumber": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_putNumber';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/storage/putNumber`,
        qs,
        
      });
    },
    "/system/storage/putString": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_putString';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/storage/putString`,
        qs,
        
      });
    },
    "/system/storage/remove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_remove';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/storage/remove`,
        qs,
        
      });
    },
    "/system/storage/userGet": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userGet';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/storage/userGet`,
        qs,
        
      });
    },
    "/system/storage/userGetNumber": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userGetNumber';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/storage/userGetNumber`,
        qs,
        
      });
    },
    "/system/storage/userGetString": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userGetString';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/storage/userGetString`,
        qs,
        
      });
    },
    "/system/storage/userPut": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userPut';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/storage/userPut`,
        qs,
        body,
      });
    },
    "/system/storage/userPutNumber": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userPutNumber';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/storage/userPutNumber`,
        qs,
        
      });
    },
    "/system/storage/userPutString": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userPutString';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/storage/userPutString`,
        qs,
        
      });
    },
    "/system/storage/userRemove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_storage_userRemove';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/storage/userRemove`,
        qs,
        
      });
    }
  },
  "system/workflow": {

    "/system/workflow/workflowCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflow`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workflow`,
        qs,
        
      });
    },
    "/system/workflow/workflowUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/workflow/workflow`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/workflow/workflow/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workflow/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowConnectorCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowConnectorCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowConnector`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowConnectorRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowConnectorRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workflowConnector`,
        qs,
        
      });
    },
    "/system/workflow/workflowConnectorUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowConnectorUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/workflow/workflowConnector`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowConnectorDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowConnectorDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/workflow/workflowConnector/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowConnectorReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowConnectorReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workflowConnector/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowNodeCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowNodeCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowNode`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowNodeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowNodeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workflowNode`,
        qs,
        
      });
    },
    "/system/workflow/workflowNodeUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowNodeUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/system/workflow/workflowNode`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowNodeDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowNodeDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/system/workflow/workflowNode/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowNodeReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowNodeReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workflowNode/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowOpCreateOrUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpCreateOrUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpCreateOrUpdate`,
        qs,
        body,
      });
    },
    "/system/workflow/workflowOpDisable": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpDisable';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpDisable/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowOpDisableRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpDisableRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpDisableRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workflowOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workflowOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workflowOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workpieceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workpieceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workpiece`,
        qs,
        
      });
    },
    "/system/workflow/workpieceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workpieceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workpiece/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workpieceNodeRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workpieceNodeRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workpieceNode`,
        qs,
        
      });
    },
    "/system/workflow/workpieceNodeReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workpieceNodeReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/system/workflow/workpieceNode/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workpieceOpForward": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workpieceOpForward';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workpieceOpForward/${pathParams.id}`,
        qs,
        
      });
    },
    "/system/workflow/workpieceOpRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'system_workflow_workpieceOpRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/system/workflow/workpieceOpRevert/${pathParams.id}`,
        qs,
        
      });
    }
  },
  "trade": {

    "/trade/clearanceCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/clearance`,
        qs,
        body,
      });
    },
    "/trade/clearanceRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/clearance`,
        qs,
        
      });
    },
    "/trade/clearanceUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/clearance`,
        qs,
        body,
      });
    },
    "/trade/clearanceDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/clearance/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/clearance/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/clearanceItem`,
        qs,
        body,
      });
    },
    "/trade/clearanceItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/clearanceItem`,
        qs,
        
      });
    },
    "/trade/clearanceItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/clearanceItem`,
        qs,
        body,
      });
    },
    "/trade/clearanceItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/clearanceItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/clearanceItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/clearanceOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/clearanceOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/clearanceOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/clearanceOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_clearanceOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/clearanceOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contract`,
        qs,
        body,
      });
    },
    "/trade/contractRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/contract`,
        qs,
        
      });
    },
    "/trade/contractUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/contract`,
        qs,
        body,
      });
    },
    "/trade/contractDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/contract/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/contract/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractItem`,
        qs,
        body,
      });
    },
    "/trade/contractItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/contractItem`,
        qs,
        
      });
    },
    "/trade/contractItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/contractItem`,
        qs,
        body,
      });
    },
    "/trade/contractItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/contractItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/contractItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractPaymentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractPayment`,
        qs,
        body,
      });
    },
    "/trade/contractPaymentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/contractPayment`,
        qs,
        
      });
    },
    "/trade/contractPaymentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/contractPayment`,
        qs,
        body,
      });
    },
    "/trade/contractPaymentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/contractPayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractPaymentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/contractPayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractPaymentOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractPaymentOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractPaymentOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractPaymentOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractPaymentOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractPaymentOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/contractPaymentOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_contractPaymentOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/contractPaymentOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/costCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/cost`,
        qs,
        body,
      });
    },
    "/trade/costRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/cost`,
        qs,
        
      });
    },
    "/trade/costUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/cost`,
        qs,
        body,
      });
    },
    "/trade/costDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/cost/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/costReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/cost/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/costAllocationCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costAllocationCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/costAllocation`,
        qs,
        body,
      });
    },
    "/trade/costAllocationRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costAllocationRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/costAllocation`,
        qs,
        
      });
    },
    "/trade/costAllocationUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costAllocationUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/costAllocation`,
        qs,
        body,
      });
    },
    "/trade/costAllocationDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costAllocationDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/costAllocation/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/costAllocationReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_costAllocationReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/costAllocation/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContract`,
        qs,
        body,
      });
    },
    "/trade/exchangeContractRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/exchangeContract`,
        qs,
        
      });
    },
    "/trade/exchangeContractUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/exchangeContract`,
        qs,
        body,
      });
    },
    "/trade/exchangeContractDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/exchangeContract/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/exchangeContract/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractPayment`,
        qs,
        body,
      });
    },
    "/trade/exchangeContractPaymentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/exchangeContractPayment`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/exchangeContractPayment`,
        qs,
        body,
      });
    },
    "/trade/exchangeContractPaymentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/exchangeContractPayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/exchangeContractPayment/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractPaymentOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractPaymentOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractPaymentOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractPaymentOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractPaymentOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractPaymentOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractProfileCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractProfileCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/exchangeContractProfile`,
        qs,
        body,
      });
    },
    "/trade/exchangeContractProfileRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractProfileRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/exchangeContractProfile`,
        qs,
        
      });
    },
    "/trade/exchangeContractProfileUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractProfileUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/exchangeContractProfile`,
        qs,
        body,
      });
    },
    "/trade/exchangeContractProfileDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractProfileDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/exchangeContractProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/exchangeContractProfileReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_exchangeContractProfileReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/exchangeContractProfile/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipment`,
        qs,
        body,
      });
    },
    "/trade/shipmentRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/shipment`,
        qs,
        
      });
    },
    "/trade/shipmentUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/shipment`,
        qs,
        body,
      });
    },
    "/trade/shipmentDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/shipment/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/shipment/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentContainerCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentContainerCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipmentContainer`,
        qs,
        body,
      });
    },
    "/trade/shipmentContainerRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentContainerRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/shipmentContainer`,
        qs,
        
      });
    },
    "/trade/shipmentContainerUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentContainerUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/shipmentContainer`,
        qs,
        body,
      });
    },
    "/trade/shipmentContainerDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentContainerDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/shipmentContainer/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentContainerReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentContainerReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/shipmentContainer/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentItemCreate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentItemCreate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipmentItem`,
        qs,
        body,
      });
    },
    "/trade/shipmentItemRead": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentItemRead';
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/shipmentItem`,
        qs,
        
      });
    },
    "/trade/shipmentItemUpdate": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentItemUpdate';
      const qs = resolveQueryParams(this, i, opId);
      const body = resolveRequestBody(this, i, opId);      

      return request.call(this, {
        method: "PUT",
        path: `/trade/shipmentItem`,
        qs,
        body,
      });
    },
    "/trade/shipmentItemDelete": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentItemDelete';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "DELETE",
        path: `/trade/shipmentItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentItemReadById": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentItemReadById';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "GET",
        path: `/trade/shipmentItem/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentOpApprove": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentOpApprove';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipmentOpApprove/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentOpApproveRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentOpApproveRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipmentOpApproveRevert/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentOpPrepare": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentOpPrepare';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipmentOpPrepare/${pathParams.id}`,
        qs,
        
      });
    },
    "/trade/shipmentOpPrepareRevert": async function (this: IExecuteFunctions, i: number) {
      const opId = 'trade_shipmentOpPrepareRevert';
      const pathParams = resolvePathParams(this, i, opId);
      const qs = resolveQueryParams(this, i, opId);      

      return request.call(this, {
        method: "POST",
        path: `/trade/shipmentOpPrepareRevert/${pathParams.id}`,
        qs,
        
      });
    }
  }
};
