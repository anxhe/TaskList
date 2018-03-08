import {Directive, OnInit, ElementRef, Renderer2, Input} from "@angular/core";

@Directive({
  selector: '[appCheck]'
})

export class CheckDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @Input('appCheck') task: any = {};

  ngOnInit() {
    if (this.task.completed) {
      this.renderer.setStyle(this.elRef.nativeElement, 'opacity', '0.5');
    }
  }
}
