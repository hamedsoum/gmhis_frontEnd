import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WaitingRoom } from 'src/app/_models/waitingRoom.model';
import { WaitingRoomService } from 'src/app/_services/waiting-room.service';
import { disableItem } from 'src/app/_utility/disable-item';
import { enableItem } from 'src/app/_utility/enable-item';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-waiting-room-list',
  templateUrl: './waiting-room-list.component.html',
  styleUrls: ['./waiting-room-list.component.css']
})
export class WaitingRoomListComponent implements OnInit {

    /**
     * search formGroup
     */
    public form: FormGroup;

    /**
     * entries formGroup
     */
    public entryForm: FormGroup;
  
    /**
     * init first page
     */
    public page = 0;
  
    /**
     * number of item par page default 10
     */
    public perPage = 10;
  
    /**
     * total items
     */
    public totalItem: number;
  
    /**
     * number of page
     */
    public pages: number;
  
    /**
     * handle the spinner
     */
    public loading = true;
  
    /**
     * the selected item a action
     */
    public selectedItem: number;
  
    /**
     * object model
     */
    waitingRoom : WaitingRoom;

    /**
     * collection of object
     */
    waitingRooms: WaitingRoom[];
  
  
    /**
     * Define entries options
     */
    entries = [
      { id: 10, value: 10 },
      { id: 25, value: 25 },
      { id: 50, value: 50 },
      { id: 100, value: 100 }
    ];

   /**
   * define states options
   */
  actives = [
    {id: "Y", value: "Actif"},
    {id: "N", value: "Inactif"},
  ]
  
    /**
     *  order direction
     */
    order = 'desc';
  
    /**
     * order column default id
     */
    sort = 'id';
  
    /**
     * description of the order direction
     */
    orderDescription = 'decroissant';

    
   /**
    * define if request result has datas or no
    */
   hasNoData: boolean;

   /**
    * Msg to display when request result is empty
    */
   EmptyMessage: String;
  
   /**
    * page title
    */
    @Input()
    title: string;

    constructor(
      private waitingRoomService: WaitingRoomService,
   
    ) { }
  
    ngOnInit() {
      
      this.initForm();
      this.getWaitingRooms();
      
    }
  
  
    /**
     *  init form 
     */
    initForm() {
      this.form = new FormGroup({
        name: new FormControl(''),
        active: new FormControl(null),
      })
  
      this.entryForm = new FormGroup({
        entries: new FormControl(10),
      })
    }
  
    /**
     * get list
     */
    getWaitingRooms() {
      let data = this.form.value
      data.entries = this.entryForm.get('entries').value;
      data.page = this.page;
      data.order = this.order;
      data.sort = this.sort;
     
      this.waitingRoomService.findAllByPage(data).subscribe(
        res => {
          if (res) {
            this.loading = false;
            this.hasNoData=false;
            this.totalItem = res['totalElements'];
            this.pages = res['totalPages'];
            this.waitingRooms = res['content'];
            this.page = res['pageNumber'] + 1;
          };
        },
        error =>{
              this.waitingRooms = [];
              this.loading=false;
              this.hasNoData=true;
              this.EmptyMessage=error;
        })
    }
  
   
  /**
   * search function
   */
  search() {
    this.loading = true;
    this.page =this.page > 0 ? this.page - 1: 0;
    this.getWaitingRooms();
  }

  /**
   * sort function
   * @param SortColumn 
   */
  onSort(SortColumn) {
    this.loading= true;
    if (this.order == 'desc') {
      this.order = 'asc';
      this.orderDescription = 'decroissant';
    } else {
      this.orderDescription = 'croissant';
      this.order = 'desc';
    }
    this.orderDescription;
    this.sort = SortColumn;
    this.loading = true
    this.page = this.page - 1;
    this.getWaitingRooms();
  }

  /**
   * set the current page
   * @param pageNum 
   */
  public onPageChange(pageNum: number): void {
    this.loading = true;
    this.page = pageNum - 1;
    this.getWaitingRooms();
  }

  /**
   * function to handle the selected number of entries to show
   */
  OnEntryChange() {
    this.loading = true;
    this.perPage = this.entryForm.get('entries').value;
    this.page = this.page - 1;
    this.getWaitingRooms();
  }

  /**
   * set the selected item 
   * @param item 
   */
  onItemChange(item) {
    this.selectedItem = item;
  }

  /**
   * disable a waiting room
   */
  disable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment desactiver cette salle d\'attente?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {
      if (result.value) {

        this.waitingRoomService.disable(this.selectedItem).subscribe(result => {
          //disable item in the DOM
          if (result) disableItem(this.waitingRooms, result['id']);

          Swal.fire(
            'Desactivé!',
            'salle d\'attente desactiver avec succès.',
            'success'
          );

        });

      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'la salle d\'attente n\'a pas été modifiée.',
          'error'
        )
      }
    })
  }

  /**
   * enable a waiting room
   */
  enable() {
    Swal.fire({
      title: 'Souhaitez-vous vraiment Activer cette salle d\'attente?',
      text: '',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui.',
      cancelButtonText: 'Annulée'
    }).then((result) => {

      if (result.value) {
        this.waitingRoomService.enable(this.selectedItem).subscribe(result => {
          //Enable item in the Dom
          if (result) enableItem(this.waitingRooms, result['id']);

          Swal.fire(
            'Actvé!',
            'salle d\'attente activé avec succès.',
            'success'
          );

        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulée',
          'La salle d\'attente n\'a pas été modifié.',
          'error'
        )
      }
    })
  }
}
