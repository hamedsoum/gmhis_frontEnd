import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PageList } from '../_models/page-list.model';
import { Facility } from './models/facility';
import { IFacilityDto as IFacilityCreateUpdate } from './models/facility-dto';

@Injectable({
  providedIn: 'root'
})
export class FaciityServiceService {
  
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findAll(data): Observable<PageList> {
    let queryParams = {};
    queryParams = {
      params: new HttpParams()
        .set('page', data['page'])
        .set('size', data['size'] ?? '')
        .set('name', data['name'])
        .set('active', data['active'] ?? '')
        .set('sort', data['sort']),
    };

    return this.http.get<PageList>(`${this.apiUrl}/facility/p_list`, queryParams);
  }

  /**
   * It returns an Observable of an array of any type
   * @returns An array of objects with the following properties:
   * - id
   * - name
   * - active
   */
  findActiveFacilityNameAndId(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/facility/active_facilities_name`);
  }

  findActiveFacilityTypeNameAndId(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/facility_type/active_facilities_name`);
  }

  findActiveFacilityCategoryNameAndId(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/facility_category/active_facilitiesCategory_name`);
  }

  createFaciity(facilityDto: IFacilityCreateUpdate): Observable<Facility> {
    return this.http.post<Facility>(`${this.apiUrl}/facility/add`, facilityDto);
  }

  updateFacility(facilityDto: IFacilityCreateUpdate): Observable<IFacilityCreateUpdate> {
    return this.http.put<IFacilityCreateUpdate>(`${this.apiUrl}/facility/update/${facilityDto.id}`, facilityDto)
  }

  getFacilityDetails(faciity: any): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/facility/get-detail/${faciity.id}`
    );
  }

  createFormData(facilityDto: IFacilityCreateUpdate, facilityLogo : File) : FormData{
    let formData = new FormData();
    formData.append("id", facilityDto.id);
    formData.append("name", facilityDto.name);
    formData.append("active", String(facilityDto.active));
    formData.append("dhisCode", facilityDto.dhisCode);
    formData.append("facilityCategoryId", facilityDto.facilityCategoryId);
    formData.append("facilityTypeId", facilityDto.facilityTypeId);
    formData.append("latitude", String(facilityDto.latitude));
    formData.append("localCode", facilityDto.localCode);
    formData.append("localityId", String(facilityDto.localityId));
    formData.append("longitude", String(facilityDto.longitude));
    formData.append("shortName", String(facilityDto.shortName));
    formData.append("logo", facilityLogo);
    formData.append("address", String(facilityDto.address));
    formData.append("contact", String(facilityDto.contact));
    formData.append("email", String(facilityDto.email));

    return formData;
  }

}
