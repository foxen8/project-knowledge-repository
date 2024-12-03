import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { ApiService } from '../../service/api-service/api.service';
@Component({
  selector: 'app-search-profile-role',
  templateUrl: './search-profile-role.component.html',
  styleUrls: ['./search-profile-role.component.scss'],
})
export class SearchProfileRoleComponent {
  data: any;
  filteredData: any;
  searchTerm: string = '';
  svg: any;
  tree: any;
  width: number = 900;
  height: number = 600;

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.data = {
      name: 'Οικογένειες θέσεων',
      children: [
        { name: 'Δικαιοσύνη' },
        {
          name: 'Δημόσια Διοίκηση',
          children: [
            {
              name: 'Διοίκηση και Διαχείριση Πολιτικών',
              tooltip: 'This is the tooltip',
            },
            {
              name: 'Συντονισμός και Παρακολούθηση Έργων',
              tooltip: 'This is the tooltip',
            },
            { name: 'Διασφάλιση Ποιότητας', tooltip: 'This is the tooltip' },
            { name: 'Διαπραγμάτευση', tooltip: 'This is the tooltip' },
            { name: 'Διοικητική Υποστήριξη', tooltip: 'This is the tooltip' },
            {
              name: 'Εστίαση, Φύλαξη και Καθαριότητα',
              tooltip: 'This is the tooltip',
            },
            { name: 'Εργαστηριακή Έρευνα', tooltip: 'This is the tooltip' },
            {
              name: 'Αξιολόγηση και Αξιοποίηση Δεδομένων',
              tooltip: 'This is the tooltip',
            },
            {
              name: 'Διερμηνεία και Μετάφραση',
              tooltip: 'This is the tooltip',
            },
            {
              name: 'Διαχείριση Δημόσιων Οικονομικών και Προϋπολογισμού',
              tooltip: 'This is the tooltip',
            },
            { name: 'Διασφάλιση Συμμόρφωσης', tooltip: 'This is the tooltip' },
            {
              name: 'Διαχείριση Δημόσιας Ακίνητης Περιουσίας',
              tooltip: 'This is the tooltip',
            },
          ],
        },
        { name: 'Υγεία και Κοινωνική Μέριμνα' },
        { name: 'Ψηφιακός Μετασχηματισμός' },
        { name: 'Υποδομές και Περιβάλλον' },
        { name: 'Υποδομές και Περιβάλλον' },
        {
          name: 'Οικονομική Ανάπτυξη',
          children: [
            { name: 'Εσωτερικοί Έλεγχοι', tooltip: 'This is the tooltip' },
            { name: 'Εξωτερικοί Έλεγχοι', tooltip: 'This is the tooltip' },
            {
              name: 'Αγροτική Παραγωγή και Τρόφιμα',
              tooltip: 'This is the tooltip',
            },
            {
              name: 'Διαχείριση Αναπτυξιακών Έργων',
              tooltip: 'This is the tooltip',
            },
            {
              name: 'Διαχείριση Διεθνών Συνεργασιών',
              tooltip: 'This is the tooltip',
            },
            {
              name: 'Διαχείριση Δημόσεων Συμβάσεων',
              tooltip: 'This is the tooltip',
            },
          ],
        },
        { name: 'Πολιτισμός, Τουρισμός και Επικοινωνία' },
        { name: 'Ασφάλεια και Άμυνα' },
      ],
    };
    this.getTree();
    this.initTree();
    this.updateTree(this.filteredData);
  }

  initTree() {
    d3.select('#tree-container').select('svg').remove();

    this.svg = d3
      .select('#tree-container')
      .append('svg')
      .attr('width', 1900)
      .attr('height', 800)
      .append('g')
      .attr('transform', 'translate(180,100)');
  }

  updateTree(data: any) {
    const tooltip = d3.select('#tooltip');

    const root = d3.hierarchy(data);
    const tree = d3
      .tree()
      .size([this.height, this.width])
      .separation((a, b) => (a.parent === b.parent ? 1 : 1.5));

    const treeData = tree(root);

    const nodes = treeData.descendants();
    const links = treeData.links();

    this.svg.selectAll('.link').remove();
    this.svg
      .selectAll('.link')
      .data(links)
      .join('path')
      .attr('class', 'link')
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2)
      .attr(
        'd',
        d3
          .linkHorizontal()
          .x((d: any) => d.y)
          .y((d: any) => d.x)
      );

    const nodeGroup = this.svg
      .selectAll('.node')
      .data(nodes, (d: any) => d.data.name)
      .join('g')
      .attr('class', 'node')
      .attr('transform', (d: any) => `translate(${d.y},${d.x})`);

    nodeGroup
      .append('circle')
      .attr('r', 5)
      .attr('fill', (d: any) => (d.children ? 'steelblue' : 'orange'))
      .on('mouseover', function (event: MouseEvent, d: any) {
        if (!d.children && d.data.tooltip) {
          tooltip
            .style('display', 'block')
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`)
            .html(`<strong>${d.data.tooltip}</strong>`);

          d3.select(event.currentTarget as SVGCircleElement).attr(
            'fill',
            'lightblue'
          );
        }
      })
      .on('mousemove', function (event: MouseEvent, d: any) {
        if (!d.children && d.data.tooltip) {
          tooltip
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
        }
      })
      .on('mouseout', function (event: MouseEvent, d: any) {
        if (!d.children && d.data.tooltip) {
          tooltip.style('display', 'none');

          d3.select(event.currentTarget as SVGCircleElement).attr(
            'fill',
            'orange'
          );
        }
      });

    nodeGroup
      .append('text')
      .attr('dy', 3)
      .attr('x', (d: any) => (d.children ? -10 : 10))
      .style('text-anchor', (d: any) => (d.children ? 'end' : 'start'))
      .text((d: any) => d.data.name)
      .on('mouseover', function (event: MouseEvent, d: any) {
        if (!d.children && d.data.tooltip) {
          tooltip
            .style('display', 'block')
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`)
            .html(`<strong>${d.data.tooltip}</strong>`);
        }
      })
      .on('mousemove', function (event: MouseEvent, d: any) {
        if (!d.children && d.data.tooltip) {
          tooltip
            .style('left', `${event.pageX + 10}px`)
            .style('top', `${event.pageY + 10}px`);
        }
      })
      .on('mouseout', function (event: MouseEvent, d: any) {
        if (!d.children && d.data.tooltip) {
          tooltip.style('display', 'none');
        }
      })
      .on('click', (event: MouseEvent, d: any) => {
        if (!d.children && d.data.tooltip) {
          this.router.navigate(['/position-family'], {
            state: {
              familyName: d.data.name,
              parentName: d.parent.data.name,
            },
          });
        }
      });
  }

  filterTree() {
    const searchTermLower = this.searchTerm.toLowerCase();
    const filterNodes = (node: any): any =>
      node.name.toLowerCase().includes(searchTermLower) ||
      (node.children &&
        node.children
          .map((child: any) => filterNodes(child))
          .filter((child: any) => child).length)
        ? {
            ...node,
            children: node.children
              ? node.children
                  .map((child: any) => filterNodes(child))
                  .filter((child: any) => child)
              : [],
          }
        : null;

    this.filteredData = filterNodes(this.data);
    if (this.filteredData) {
      this.updateTree(this.filteredData);
    }
  }
  getTree() {
    // this.apiService.getTree().subscribe((resp) => {
    //   this.data = resp;
      this.filteredData = this.data;
    // });
  }
}
