import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayerRoutingModule } from './layer-routing.module';
import { LayerComponent } from './layer/layer.component';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  declarations: [LayerComponent],
  imports: [CommonModule, CoreModule, LayerRoutingModule],
})
export class LayerModule {}
