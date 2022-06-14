import {
  Directive,
  Input,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { SkeletonComponent } from '../components/skeleton/skeleton.component';

@Directive({
  selector: '[skeleton]'
})
export class SkeletonDirective {

  @Input('skeleton') isLoading = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonClassName') className: string[] = [];

  constructor(private tpl: TemplateRef<any>,
    private vcr: ViewContainerRef) {

  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.vcr.clear();

      if (changes['isLoading'].currentValue) {
        Array.from({ length: this.size }).forEach(() => {
          const ref = this.vcr.createComponent(SkeletonComponent);

          Object.assign(ref.instance, {
            className: this.className
          })
        })
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }

}
