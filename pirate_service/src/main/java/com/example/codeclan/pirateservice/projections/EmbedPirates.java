package com.example.codeclan.pirateservice.projections;

import com.example.codeclan.pirateservice.models.Pirate;
import com.example.codeclan.pirateservice.models.Ship;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedPirates", types = Ship.class)
public interface EmbedPirates {
    long getId();
    String getName();
    List<Pirate> getPirates();
}
