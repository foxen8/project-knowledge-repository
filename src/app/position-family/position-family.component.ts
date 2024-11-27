import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-position-family',
  templateUrl: './position-family.component.html',
  styleUrls: ['./position-family.component.scss'],
})
export class PositionFamilyComponent implements OnInit {
  familyName: string | undefined;
  parentName: string | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.familyName = params['familyName'];
      this.parentName = params['parentName'];
    });
  }
  jobPositions: string[] = [
    'Προϊστάμενος/η Γενικής Διεύθυνσης',
    'Προϊστάμενος/η Διεύθυνσης',
    'Προϊστάμενος/η Τμήματος',
    'Εμπειρογνώμονας',
    'Διοικητικός/η Υπάλληλος',
  ];
  onChipClick(selectedChip: string): void {
    console.log('Selected chip:', selectedChip); 
    // Perform actions on chip selection
  }
}
