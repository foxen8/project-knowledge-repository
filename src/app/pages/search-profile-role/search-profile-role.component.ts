import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';
import { ApiService } from '../../services/api-service/api.service';
import { HelperService } from 'src/app/services/helper-service/helper.service';
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

  constructor(
    private router: Router,
    private apiService: ApiService,
    private helperService: HelperService
  ) {}

  ngOnInit() {
    this.getTree();
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
        console.log(d);
        if (!d.children && d.data.tooltip) {
          this.router.navigate(['/position-family'], {
            state: {
              familyName: d.data.name,
              parentName: d.parent.data.name,
              id: d.data.id,
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
    this.apiService.getJobFamilies().subscribe(
      (response: any) => {
        const formattedData = response.map((jobFamily: any) => ({
          name: jobFamily.title,
          children: jobFamily.profileRoles.map((profileRole: any) => ({
            id: jobFamily.id,
            name: profileRole.name,
            tooltip: profileRole.description,
          })),
        }));

        this.data = {
          name: 'Οικογένειες θέσεων',
          children: formattedData,
        };
        this.filteredData = this.data;

        this.initTree();
        this.updateTree(this.filteredData);
      },
      (error) => {
        this.helperService.errorHandle(error);
      }
    );
  }
}
